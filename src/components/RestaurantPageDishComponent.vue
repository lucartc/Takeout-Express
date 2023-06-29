<script setup>
    import { add_to_cart } from '../data.js'
    import { useRouter } from 'vue-router'
    import { ref, onMounted } from 'vue'
    import { get_cart_items } from '../data.js'

    const props = defineProps({
        id: {type: Number},
        restaurant_id: {type: Number},
        name: {type: String},
        icon: {type: String, default: 'icons/dummy.svg'},
        price: {type: Number},
        rating: {type: Number},
        reviews: {type: Number}
    })

    const router = useRouter()
    const item_is_in_cart = ref(false)

    function try_add_to_cart(){
        let data = {
            id: props.id
        }
        add_to_cart(data)
        .then(data => {
            emit('added_item_to_cart')
            check_if_dish_is_in_cart()
        })
    }

    function go_to_dish_page(){
        router.push({name: 'dish_page', params: {dish_id: props.id}})
    }

    onMounted(() => {
        check_if_dish_is_in_cart()
    })

    function check_if_dish_is_in_cart(){
        get_cart_items()
        .then(data => {
            data = data.filter(item => {
                return item.id == props.id
            })

            if(data.length > 0){
                item_is_in_cart.value = true
            }
        })
    }

    const emit = defineEmits([
        'added_item_to_cart'
    ])
</script>

<template>
    <div class="drop-shadow-md gap-3 rounded-lg flex flex-row w-full max-w-full min-w-full aspect-[5/1] bg-gray-100">
        <img @click="go_to_dish_page" class="rounded-l-lg h-full min-h-full max-h-full aspect-square object-cover" :src="icon">
        <div @click="go_to_dish_page" class="flex flex-col h-full min-h-full max-h-full justify-center">
            <label class="text-dark text-sm">{{ name }}</label>
            <label class="text-sm font-bold text-dark">${{ price.toFixed(2) }}</label>
            <label class="text-xs text-dark">{{ rating }} stars, {{ reviews }} reviews</label>
        </div>
        <div v-if="!item_is_in_cart" @click="try_add_to_cart" class="ml-auto mr-2 flex flex-row justify-center items-center h-[80%] min-h-[80%] max-h-[80%] aspect-square rounded-lg bg-red-500 self-center drop-shadow-md">
            <img class="h-[45%] min-h-[45%] max-h-[45%]" :src="'icons/cart.svg'">
        </div>
        <div v-else class="ml-auto mr-2 flex flex-row justify-center items-center h-[60%] min-h-[60%] max-h-[60%] aspect-[2/1] rounded-lg bg-green-500 self-center drop-shadow-md">
            <label class="text-white text-sx font-bold">In cart</label>
        </div>
    </div>
</template>