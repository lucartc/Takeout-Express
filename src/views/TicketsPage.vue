<script setup>
    import { IonPage, onIonViewDidEnter } from '@ionic/vue'
    import { get_user_tickets } from '../data.js'
    import { ref, computed } from 'vue'
    import PageContentComponent from '@/components/PageContentComponent.vue'

    const has_tickets = computed(() => {
        return tickets.value.length > 0
    })

    const tickets = ref([])
    const page = ref()

    onIonViewDidEnter(() => {
        get_user_tickets()
        .then(data => tickets.value = data)
        .catch(err => console.log('Error'))
        page.value.update_cart_counter()
    })
</script>

<template>
    <ion-page class="flex flex-col justify-start">
        <PageContentComponent ref="page">
            <div class="flex flex-col gap-3 w-full min-w-full max-w-full">
                <label class="text-2xl font-bold self-start text-dark">My tickets</label>
                <div class="flex flex-col gap-4" v-if="has_tickets">
                    <div :class="['w-full','min-w-full','max-w-full','flex','flex-col','p-4','box-border','bg-orange-300','gap-2','drop-shadow-md']" v-for="ticket in tickets">
                        <div class="flex flex-row gap-3 items-center justify-between">
                            <label class="font-bold text-xl w-[60%] min-w-[60%] max-w-[60%] text-dark text-ellipsis overflow-hidden whitespace-nowrap">{{ ticket.name }}</label>
                            <label class="py-1 px-4 text-white box-border bg-red-500 font-bold text-xl rounded-lg w-fit">{{ ticket.value }}% off</label>
                        </div>
                        <label class="text-sm text-dark">{{ ticket.description }}</label>
                    </div>
                </div>
                <div class="w-full min-w-full max-w-full aspect-[7/1] flex flex-row justify-center items-center bg-red-600 drop-shadow-md rounded-lg" v-else>
                    <label class="text-white">There are no tickets</label>
                </div>
            </div>
        </PageContentComponent>
    </ion-page>
</template>