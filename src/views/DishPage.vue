<script setup>
    import { IonPage, onIonViewDidEnter } from '@ionic/vue'
    import { get_restaurant_dish, get_restaurant, add_to_cart, get_cart_items } from '../data.js'
    import { useRoute, useRouter } from 'vue-router'
    import { ref } from 'vue'
    import PageContentComponent from '@/components/PageContentComponent.vue'
    import { Toast } from '@capacitor/toast'

    const route = useRoute()
    const router = useRouter()
    const dish = ref()
    const restaurant = ref()
    const reviews = ref([])
    const page = ref()
    const dish_is_in_cart = ref(false)

    function try_add_to_cart(){
        let data = { id: dish.value.id }
        
        add_to_cart(data)
        .then(data => {
            page.value.update_cart_counter()
            dish_is_in_cart.value = true
        })
        .catch(async function(err){ await Toast.show({text: 'Error'}) })
    }

    function go_to_restaurant_page(){
        router.push({
            name: 'restaurant_page',
            params: {restaurant_id: restaurant.value.id}
        })
    }

    onIonViewDidEnter(() => {
        let data = { id: route.params.dish_id }

        get_restaurant_dish(data)
        .then(data => {
            dish.value = data
            let params = { id: dish.value.restaurant_id }
            return get_restaurant(params)
        })
        .then(data => {
            restaurant.value = data
            return get_cart_items()
        })
        .then(data => {
            if(data.length >= 0){
                let cart_items = data.filter(item => item.id == dish.value.id)

                if(cart_items.length > 0){
                    dish_is_in_cart.value = true
                }else{
                    dish_is_in_cart.value = false
                }
            }
        })
        .catch(async function(err){ await Toast.show({text: 'Error'}) })
        page.value.update_cart_counter()
    })
</script>

<template>
    <ion-page class="flex flex-col justify-start">
        <PageContentComponent ref="page">
            <div class="flex flex-col w-full min-w-full max-w-full gap-3">
                <div class="flex flex-row justify-between w-full min-w-full max-w-full">
                    <label class="text-xl font-bold text-dark flex flex-row gap-3">{{ dish?.name }}</label>
                    <label class="text-2xl font-bold text-orange-500">${{ dish?.price?.toFixed(2) }}</label>
                </div>
                <div @click="go_to_restaurant_page" class="ml-auto flex flex-row w-full min-w-full max-w-full aspect-[8/1] rounded-lg">
                    <img class="aspect-square h-full min-h-full max-h-full rounded-lg drop-shadow-md" :src="!restaurant ? 'icons/dummy.svg' : restaurant.profile">
                    <div class="flex flex-row justify-start items-center bg-gray-100 px-4 box-border rounded-r-lg drop-shadow-md grow">
                        <label class="text-xs self-center text-dark font-bold">{{ restaurant?.name }}</label>
                    </div>
                </div>
                <div class="w-full min-w-full max-w-full aspect-[2/1] rounded-lg drop-shadow-md relative">
                    <img class="w-full min-w-full max-w-full aspect-[2/1] rounded-lg object-cover" :src="!dish ? 'icons/dummy.svg' : dish.icon">
                    <div class="flex flex-col bg-yellow-500 justify-center p-2 box-border absolute top-[0%] right-[0%] rounded-lg rounded-br-none rounded-tl-none drop-shadow-md">
                        <label class="text-xs text-dark">{{ dish?.rating?.toFixed(2) }} stars, {{ dish?.reviews }} reviews</label>
                    </div>
                </div>
                <div v-if="!dish_is_in_cart" @click="try_add_to_cart" class="text-white text-2xl justify-center items-center gap-4 font-bold flex flex-row w-full min-w-full max-w-full aspect-[8/1] bg-background rounded-lg drop-shadow-md">
                    Add to cart <img class="h-[50%] min-h-[50%] max-h-[50%]" :src="'icons/cart.svg'">
                </div>
                <div v-else class="text-white text-2xl justify-center items-center gap-4 font-bold flex flex-row w-full min-w-full max-w-full aspect-[8/1] bg-green-500 rounded-lg drop-shadow-md">
                    Item Added to cart <img class="h-[50%] min-h-[50%] max-h-[50%]" :src="'icons/cart.svg'">
                </div>
            </div>
        </PageContentComponent>
    </ion-page>
</template>