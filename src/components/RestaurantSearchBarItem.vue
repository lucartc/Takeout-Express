<script setup>
    import { useRouter } from 'vue-router'

    const props = defineProps({
        id: {type: Number},
        name: {type: String},
        bio: {type: String},
        rating: {type: Number},
        profile: {type: String, default: 'icons/dummy.svg'}
    })

    const router = useRouter()

    function go_to_restaurant_page(){
        router.push({name: 'restaurant_page', params: {restaurant_id: props.id}})
    }
</script>

<template>
    <div @click="go_to_restaurant_page" class="flex flex-row h-[50px] min-h-[50px] max-h-[50px] min-w-full max-w-full items-start">
        <div class="flex flex-row h-full aspect-square rounded-lg justify-center items-center drop-shadow-md">
            <img class="min-h-full min-w-full max-h-full max-w-full object-cover rounded-lg" :src="profile">
        </div>
        <div class="min-h-full max-h-full grow flex flex-row justify-start items-start px-2 box-border grow overflow-hidden">
            <label class="text-sm max-w-[70%] text-dark">{{ name }}</label>
        </div>
        <div class="flex flex-row gap-1 justify-center items-center h-[50%] min-h-[50%] max-h-[50%] aspect-[2/1] bg-yellow-500 drop-shadow-md rounded-lg">
            <label class="text-sm text-dark">{{ rating.toFixed(2) }}</label>
            <img :src="'icons/star.svg'" class="h-[40%] min-h-[40%] max-h-[40%]">
        </div>
    </div>
</template>