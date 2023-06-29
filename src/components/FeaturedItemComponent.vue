<script setup>
    import { ref, onMounted } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const props = defineProps({
        id: {type: Number},
        restaurant_id: {type: Number},
        name: {type: String},
        icon: {type: String, default: 'icons/dummy.svg'},
        price: {type: Number},
        rating: {type: Number}
    })

    function go_to_dish_page(){
        router.push({name: 'dish_page', params: {dish_id: props.id}})
    }

    onMounted(() => {

    })
</script>

<template>
    <div @click="go_to_dish_page" class="drop-shadow-md rounded-lg aspect-[1/1.6] flex flex-col relative">
        <div class="min-w-full max-w-full min-h-[70%] max-h-[70%] basis-[7] grow-[7] bg-gray-200 rounded-t-lg">
            <img class="min-w-full min-h-full max-w-full max-h-full rounded-t-lg object-cover" :src="icon">
        </div>
        <div class="justify-center items-center min-h-[30%] max-h-[30%] flex flex-col py-2 box-border min-w-full max-w-full basis-[3] grow-[3] bg-gray-100 rounded-b-lg">
            <label class="text-xs text-ellipsis whitespace-nowrap overflow-hidden text-dark max-w-[90%]">{{ name }}</label>
            <label class="text-sm font-bold text-ellipsis whitespace-nowrap overflow-hidden text-dark max-w-[90%]">${{ price.toFixed(2) }}</label>
        </div>
        <div class="flex flex-row gap-1 justify-center items-center p-1 box-border absolute bg-yellow-500 w-[60%] min-w-[60%] max-w-[60%] aspect-[2.5/1] rounded-lg rounded-br-none drop-shadow-md right-[0%]">
            <label class="flex flex-row justify-center text-dark items-center text-xs">{{ rating.toFixed(2) }}</label>
            <img :src="'icons/star.svg'" class="max-h-[70%]">
        </div>
    </div>
</template>