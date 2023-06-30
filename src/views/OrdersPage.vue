<script setup>
    import { IonPage, onIonViewDidEnter } from '@ionic/vue'
    import { get_orders } from '../data.js'
    import { ref, computed } from 'vue'
    import PageContentComponent from '@/components/PageContentComponent.vue'
    import OrderItemComponent from '@/components/OrderItemComponent.vue'
    import { Toast } from '@capacitor/toast'

    const has_orders = computed(() => {
        return orders.value.length > 0
    })

    const orders = ref([])
    const page = ref()

    onIonViewDidEnter(() => {
        get_orders()
        .then(data => orders.value = data)
        .catch(async function(err){ await Toast.show({text: 'Error'}) })
        page.value.update_cart_counter()
    })
</script>

<template>
    <ion-page class="flex flex-col justify-start">
        <PageContentComponent ref="page">
            <div class="flex flex-col gap-3 w-full min-w-full max-w-full">
                <label class="self-start text-2xl font-bold text-dark">My orders</label>
                <div class="flex flex-col gap-4" v-if="has_orders">
                    <OrderItemComponent v-for="order in orders" v-bind="order"></OrderItemComponent>
                </div>
                <div class="w-full min-w-full max-w-full aspect-[7/1] flex flex-row justify-center items-center bg-red-600 drop-shadow-md rounded-lg" v-else>
                    <label class="text-white">There are no orders</label>
                </div>
            </div>
        </PageContentComponent>
    </ion-page>
</template>