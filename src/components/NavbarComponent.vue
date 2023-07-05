<script setup>
    import { IonImg } from '@ionic/vue'
    import { Preferences } from '@capacitor/preferences'
    import { ref, computed, onMounted } from 'vue'
</script>

<template>
    <div class="flex flex-row bg-red-500 py-3 px-5 justify-between w-full min-w-full max-w-full aspect-[6/1] sm:aspect-[10/1]">
        <ion-img src="takeout_express_text_logo.svg" class="w-[15%]"></ion-img>
        <div class="aspect-square w-[20%] min-w-[20%] max-w-[20%] flex flex-col justify-center box-border items-center relative">
            <ion-img class="h-[70%]" src="icons/notifications.svg"></ion-img>
        </div>
    </div>
</template>