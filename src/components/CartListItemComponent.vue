<script setup>
    import { IonImg } from '@ionic/vue'
    import { ref,watch } from 'vue'
    import {
        remove_from_cart,
        update_cart_item
    } from '../data.js'

    const props = defineProps({
        cart_id: {type: Number},
        id: {type: Number},
        restaurant_id: {type: Number},
        name: {type: String},
        icon: {type: String, default: 'icons/dummy.svg'},
        price: {type: Number},
        quantity: {type: Number, default: 1},
        user_id: {type: Number}
    })

    watch(() => props.quantity,(current,old) => {
        quantity.value = current
    })

    watch(() => props.price,(current,old) => {
        price.value = current
    })

    const quantity = ref(props.quantity)
    const price = ref(props.price)

    function decrease_quantity(){
        if(quantity.value > 1){
            quantity.value -= 1
            try_update_cart_item()
        }
    }

    function increase_quantity(){
        quantity.value += 1
        try_update_cart_item()
    }

    function try_update_cart_item(){
        let data = {
            cart_id: props.cart_id,
            id: props.id,
            restaurant_id: props.restaurant_id,
            name: props.name,
            icon: props.icon,
            price: price.value,
            quantity: quantity.value,
            user_id: props.user_id
        }

        update_cart_item(data)
        .then(data => emit('updated_quantity'))
        .catch(err => console.log('Error',err))
    }

    function try_remove_from_cart(){
        let data = {
            cart_id: props.cart_id,
        }

        remove_from_cart(data)
        .then(data => {
            emit('cart_item_removed')
        })
        .catch(err => console.log('Error'))
    }

    const emit = defineEmits([
        'cart_item_removed',
        'updated_quantity'
    ])
</script>

<template>
    <div class="flex flex-row w-full min-w-full max-w-full aspect-[3/1] rounded-lg drop-shadow-md">
        <img class="h-full min-h-full max-h-full object-cover rounded-l-lg aspect-square" :src="icon">
        <div class="flex flex-col justify-center bg-gray-100 h-full grow rounded-r-lg box-border px-4 px-2 gap-1 relative">
            <span :title="name" class="max-w-[80%] min-w-[80%] w-[80%] overflow-hidden text-ellipsis whitespace-nowrap text-dark">{{ name }}</span>
            <div class="flex flex-row w-[90%]">
                <div @click="decrease_quantity" class="flex flex-row justify-center items-center bg-red-800 h-full aspect-[1.5/1] rounded-l-lg drop-shadow-sm">
                    <img class="w-1/4" :src="'icons/minus.svg'">
                </div>
                <input v-model="quantity" min="1" step="1" type="number" class="bg-gray-100 text-dark px-3 py-1 w-[50%] drop-shadow-sm">
                <div @click="increase_quantity" class="flex flex-row justify-center items-center bg-red-800 h-full aspect-[1.5/1] rounded-r-lg drop-shadow-sm">
                    <img class="w-1/4" :src="'icons/plus.svg'">
                </div>
            </div>
            <label class="font-bold mt-2 text-dark">${{ (quantity * price).toFixed(2) }}</label>
            <div @click="try_remove_from_cart" class="flex flex-col justify-center items-center h-[30%] min-h-[30%] max-h-[30%] aspect-square absolute rounded-bl-lg rounded-tr-lg right-0 top-0 bg-red-500">
                <img class="h-[45%] min-h-[45%] max-h-[45%]" :src="'icons/trash.svg'">
            </div>
        </div>
    </div>
</template>