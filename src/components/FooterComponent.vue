<script setup>
    import { IonImg } from '@ionic/vue'
    import { useRouter } from 'vue-router'
    import { ref, computed, onMounted } from 'vue'
    import { Preferences } from '@capacitor/preferences'
    import { Toast } from '@capacitor/toast'
    import {
        logout,
        get_cart_items
    } from '../data.js'

    const has_items_in_cart = computed(() => {
        return cart_items.value.length > 0
    })

    const cart_count = computed(() => {
        if(cart_items.value.length <= 99){
            return cart_items.value.length
        }else{
            return '+99'
        }
    })

    const cart_items = ref([])
    const router = useRouter()

    function go_home(){
        router.push('/home')
    }

    function go_to_cart(){
        router.push('/cart')
    }

    function go_to_orders(){
        router.push('/orders')
    }

    function go_to_tickets(){
        router.push('/tickets')
    }

    function try_logout(){
        logout()
        .then(data => router.push('/start'))
        .catch(async function(err){ await Toast.show({text: 'Error'}) })
    }

    function update_cart_items(){
        get_cart_items()
        .then(data => cart_items.value = data)
        .catch(async function(err){ await Toast.show({text: 'Error'}) })
    }

    onMounted(() => {
        update_cart_items()
    })

    defineExpose({
        update_cart_items
    })
</script>

<template>
    <div class="flex flex-row bg-red-500 px-3 box-border justify-center w-full min-w-full max-w-full aspect-[7/1]">
        <button @click="go_home" class="aspect-square h-full min-h-full max-h-full bg-red-500 flex flex-row justify-center items-center hover:bg-red-600">
            <ion-img class="aspec-square w-[50%]" src="icons/home.svg" alt="home"></ion-img>
        </button>
        <button @click="go_to_cart" class="aspect-square h-full min-h-full max-h-full bg-red-500 flex flex-row justify-center items-center hover:bg-red-600 relative">
            <ion-img class="aspec-square w-[50%]" src="icons/cart.svg" alt="cart"></ion-img>
            <div v-if="has_items_in_cart" class="drop-shadow-sm top-[40%] left-[50%] flex flex-row justify-center items-center w-[40%] min-w-[40%] max-w-[40%] aspect-square absolute bg-blue-500 rounded-full">
                <label class="flex flex-row text-[0.7rem] text-white font-bold">{{ cart_count }}</label>
            </div>
        </button>
        <button @click="go_to_orders" class="aspect-square h-full min-h-full max-h-full bg-red-500 flex flex-row justify-center items-center hover:bg-red-600">
            <ion-img class="aspec-square w-[50%]" src="icons/orders.svg" alt="orders"></ion-img>    
        </button>
        <button @click="go_to_tickets" class="aspect-square h-full min-h-full max-h-full bg-red-500 flex flex-row justify-center items-center hover:bg-red-600">
            <ion-img class="aspec-square w-[50%]" src="icons/tickets.svg" alt="tickets"></ion-img>    
        </button>
        <button @click="try_logout" class="aspect-square h-full min-h-full max-h-full bg-red-500 flex flex-row justify-center items-center hover:bg-red-600">
            <ion-img class="aspec-square w-[50%]" src="icons/logout.svg" alt="logout"></ion-img>    
        </button>
    </div>
</template>