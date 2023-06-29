<script setup>
    const props = defineProps({
        id: {type: Number},
        name: {type: String},
        bio: {type: String},
        profile: {type: String, default: 'icons/dummy.svg'},
        zip: {type: String},
        street: {type: String},
        rating: {type: Number},
        reviews: {type: Number},
        number: {type: String},
        city: {type: String},
        country: {type: String},
        state_letters: {type: String},
        phone: {type: String},
    })
</script>

<template>
    <div class="flex flex-col items-start min-w-full max-w-full w-full aspect-[2/1] rounded-lg bg-gray-100 drop-shadow-lg">
        <div class="flex flex-row min-w-full max-w-full w-full min-h-[60%] max-h-[60%] h-[60%] p-2 box-border rounded-t-lg">
            <div class="flex flex-row min-h-full h-full max-h-full">
                <img class="drop-shadow-md min-h-full h-full max-h-full aspect-square rounded-lg" :src="profile">
                <div class="flex flex-col p-3 box-border gap-2">
                    <label class="text-dark">{{ name }}</label>
                    <div class="flex flex-row">
                        <img class="max-h-[12px]" :src="'icons/star.svg'">
                        <img class="max-h-[12px]" :src="'icons/star.svg'">
                        <img class="max-h-[12px]" :src="'icons/star.svg'">
                        <img class="max-h-[12px]" :src="'icons/star.svg'">
                        <img class="max-h-[12px]" :src="'icons/star.svg'">
                    </div>
                    <label class="text-xs text-dark">{{ rating }} stars, {{ reviews }} reviews</label>
                </div>
            </div>
        </div>
        <div class="flex flex-row min-w-full max-w-full w-full h-[40%] min-h-[40%] max-h-[40%] justify-between rounded-b-lg">
            <div class="flex flex-row w-[50%] min-w-[50%] max-w-[50%] p-2 box-border gap-3 rounded-bl-lg items-start justify-start">
                <img class="h-[40%] min-h-[40%] max-h-[40%]" :src="'icons/location.svg'">
                <div class="flex flex-col">
                    <label class="text-xs overflow-hidden text-dark text-ellipsis whitespace-nowrap">{{ zip }}</label>
                    <label class="text-xs overflow-hidden text-dark text-ellipsis whitespace-nowrap">{{ street }}, {{ number }}</label>
                    <label class="text-xs overflow-hidden text-dark text-ellipsis whitespace-nowrap">{{ city }} - {{ state_letters }} - {{ country }}</label>
                </div>
            </div>
            <div class="flex flex-row w-[40%] min-w-[40%] max-w-[40%] p-2 box-border gap-1 rounded-br-lg">
                <img class="h-[40%] min-h-[40%] max-h-[40%]" :src="'icons/phone.svg'">
                <div class="flex flex-col">
                    <label class="text-xs text-dark">{{ phone }}</label>
                </div>
            </div>
        </div>
    </div>
</template>