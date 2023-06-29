<script setup>
    import { IonPage, IonImg, onIonViewDidEnter } from '@ionic/vue'
    import { get_cart_items, create_order } from '../data.js'
    import { ref, computed } from 'vue'
    import { Preferences } from '@capacitor/preferences'
    import PageContentComponent from '@/components/PageContentComponent.vue'
    import CartListItemComponent from '@/components/CartListItemComponent.vue'
    import { LocalNotifications } from '@capacitor/local-notifications';

    const has_items_in_cart = computed(() => {
        return cart_items.value.length > 0
    })

    const calculate_total_order_price = computed(() => {
        return cart_items.value
        .map(item => {
            return item.price * item.quantity
        })
        .reduce((acc,item) => acc+item).toFixed(2)
    })

    const cart_items = ref([])
    const page = ref()

    onIonViewDidEnter(() => {
        try_get_carts()
    })

    function try_get_carts(){
        get_cart_items()
        .then(data => {
            cart_items.value = data
            page.value.update_cart_counter()
        })
        .catch(err => console.log('Error',err))
    }

    function try_create_order(){
        create_order()
        .then(data => {
            try_get_carts()
            page.value.update_cart_counter()
            notify_new_order()
        })
        .catch(err => console.log('Error',err))
    }

    function notify_new_order(){
        Preferences.get({key: 'orders'})
        .then(orders => {
            Preferences.get({key: 'current_user'})
            .then(user => {
                Preferences.get({key: 'notifications'})
                .then(notifications => {
                    let current_user = user.value
                    let current_orders = orders.value
                    let current_notifications = notifications.value

                    if(current_user == null){
                        throw 'Error'
                    }else{
                        current_user = JSON.parse(current_user)
                    }

                    if(current_orders == null){
                        throw 'Error'
                    }else{
                        current_orders = JSON.parse(current_orders)
                    }

                    if(current_notifications == null){
                        current_notifications = []
                    }else{
                        current_notifications = JSON.parse(current_notifications)
                    }

                    current_orders = current_orders.filter(order => {
                        return order.user_id == current_user.id
                    })

                    current_orders = current_orders.sort((a,b) => {
                        return b.id - a.id
                    })

                    current_notifications = current_notifications.sort((a,b) => {
                        return b.id - a.id
                    })

                    let notification_id = 1

                    if(current_notifications.length > 0){
                        notification_id = current_notifications[0].id+1
                    }

                    LocalNotifications.schedule({notifications: [
                        {
                            title: 'New order created!',
                            body: 'The order code is '+current_orders[0].code,
                            id: notification_id
                        }
                    ]})
                })
            })
        })
    }
</script>

<template>
    <ion-page class="flex flex-col justify-start">
        <PageContentComponent ref="page" class="snap-y">
            <div class="flex flex-col gap-3 w-full">
                <label class="text-2xl font-bold text-dark">Cart list</label>
                <div v-if="has_items_in_cart" class="flex flex-col gap-4">
                    <CartListItemComponent v-for="cart in cart_items" v-bind="cart" @updated_quantity="try_get_carts" @cart_item_removed="try_get_carts" class="snap-end"></CartListItemComponent>
                    <label class="snap-end text-xl text-dark font-bold">Total: ${{ calculate_total_order_price }}</label>
                    <div class="flex flex-row gap-4 pb-16 snap-end w-full min-w-full max-w-full">
                        <div @click="try_create_order" class="flex flex-row text-lg font-bold bg-red-500 px-3 py-2 text-white justify-center items-center drop-shadow-md rounded-lg w-full min-w-full max-w-full">Create order</div>
                    </div>
                </div>
                <div v-else class="flex flex-row text-white justify-center items-center gap-3 w-full min-w-full max-w-full aspect-[7/1] rounded-lg drop-shadow-md bg-red-600">
                    <label class="text-white">There are no items in the cart</label>
                    <img class="h-[40%] min-h-[40%] max-h-[40%]" :src="'icons/cart.svg'">
                </div>
            </div>
        </PageContentComponent>
    </ion-page>
</template>