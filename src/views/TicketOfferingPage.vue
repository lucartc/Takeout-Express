<script setup>
    import { IonPage, onIonViewDidEnter } from '@ionic/vue'
    import { ref, computed } from 'vue'
    import { useRoute } from 'vue-router'
    import { get_ticket_offering_tickets, get_ticket_offerings, get_user_tickets, choose_ticket } from '../data.js'
    import PageContentComponent from '@/components/PageContentComponent.vue'

    const tickets = ref([])
    const ticket_offering = ref()
    const route = useRoute()
    const chosen_ticket = ref()
    const ticket_has_been_chosen = ref(false)
    const page = ref()

    const has_tickets = computed(() => {
        return tickets.value.length > 0
    })

    const get_chosen_ticket_name = computed(() => {
        return chosen_ticket.value?.name
    })

    const has_chosen_ticket = computed(() => {
        return chosen_ticket.value != null
    })

    function set_chosen_ticket(ticket){
        chosen_ticket.value = ticket
        tickets.value = tickets.value.map(item => {
            item.chosen = false
            return item
        })
        ticket.chosen = true
    }

    function try_choose_ticket(){
        let data = {
            id: chosen_ticket.value.id
        }

        choose_ticket(data)
        .then(data => {
            console.log('Success!')
            setup()
        })
        .catch(err => console.log('Error'))
    }

    function setup(){
        ticket_has_been_chosen.value = false
        chosen_ticket.value = null

        let data = {
            id: route.params.ticket_offering_id
        }

        get_ticket_offering_tickets(data)
        .then(data => {
            tickets.value = data.map(ticket => {
                ticket.chosen = false
                return ticket
            })

            return get_user_tickets()
        })
        .then(data => {
            data = data.filter(ticket => {
                return tickets.value.map(item => item.id).indexOf(ticket.id) >= 0
            })

            if(data.length == 1){
                ticket_has_been_chosen.value = true
                chosen_ticket.value = data.pop()

                tickets.value = tickets.value.map(ticket => {
                    if(ticket.id == chosen_ticket.value.id){
                        ticket.chosen = true
                    }else{
                        ticket.chosen = false
                    }

                    return ticket
                })
            }
        })
        .catch(err => console.log('Error'))

        get_ticket_offerings()
        .then(data => {
            ticket_offering.value = data.filter(offer => {
                return offer.id == route.params.ticket_offering_id
            }).pop()
        })
        .catch(err => console.log('Error',err))

        page.value.update_cart_counter()
    }

    onIonViewDidEnter(() => {
        setup()
    })
</script>

<template>
    <ion-page class="flex flex-col justify-start">
        <PageContentComponent ref="page">
            <div class="w-full min-w-full max-w-full aspect-[2/1] rounded-lg flex flex-row justify-center items-center relative drop-shadow-md">
                <img class="rounded-lg brightness-[65%] w-full min-w-full max-w-full h-full min-h-full max-h-full object-cover" :src="!ticket_offering ? 'icons/dummy.svg' : ticket_offering.banner">
                <div class="rounded-lg backdrop-blur-[1px] absolute w-full min-w-full max-w-full h-full min-h-full max-h-full bg-[linear-gradient(#00000040,#ffffff20)]"></div>
                <div class="rounded-lg absolute top-auto left-auto p-4 box-border flex flex-col items-start w-full min-w-full max-w-full h-full min-h-full max-h-full justify-center">
                    <label class="text-white text-4xl font-bold">{{ ticket_offering?.title }}</label>
                    <label class="text-white text-lg font-bold">{{ ticket_offering?.subtitle }}</label>
                </div>
            </div>
            <div v-if="has_tickets && ticket_has_been_chosen" class="flex flex-col gap-3">
                <div :class="['w-full','min-w-full','max-w-full','flex','flex-col','p-4','box-border',ticket.chosen ? 'bg-orange-500' : 'bg-orange-300','gap-2','drop-shadow-md']" v-for="ticket in tickets">
                    <div class="flex flex-row gap-3 items-center justify-between">
                        <label class="font-bold text-xl w-[60%] min-w-[60%] max-w-[60%] text-dark text-ellipsis overflow-hidden whitespace-nowrap">{{ ticket.name }}</label>
                        <label class="py-1 px-4 text-white box-border bg-red-500 font-bold text-xl rounded-lg w-fit">{{ ticket.value }}% off</label>
                    </div>
                    <label class="text-sm text-dark">{{ ticket.description }}</label>
                </div>
                <div v-if="has_chosen_ticket" class="w-full min-w-full max-w-full aspect-[7/1] text-white text-lg bg-green-500 font-bold rounded-lg py-2 px-4 flex flex-row justify-center items-center drop-shadow-md overflow-hidden text-ellipsis whitespace-nowrap">
                    {{ get_chosen_ticket_name }} has been chosen!
                </div>
            </div>
            <div v-if="has_tickets && !ticket_has_been_chosen" class="flex flex-col gap-3">
                <div @click="set_chosen_ticket(ticket)" :class="['w-full','min-w-full','max-w-full','flex','flex-col','p-4','box-border',ticket.chosen ? 'bg-orange-500' : 'bg-orange-300','gap-2','drop-shadow-md']" v-for="ticket in tickets">
                    <div class="flex flex-row gap-3 items-center justify-between">
                        <label class="font-bold text-xl w-[60%] min-w-[60%] max-w-[60%] text-dark text-ellipsis overflow-hidden whitespace-nowrap">{{ ticket.name }}</label>
                        <label class="py-1 px-4 text-white box-border bg-red-500 font-bold text-xl rounded-lg w-fit">{{ ticket.value }}% off</label>
                    </div>
                    <label class="text-sm text-dark">{{ ticket.description }}</label>
                </div>
                <div @click="try_choose_ticket" v-if="has_chosen_ticket" class="w-full min-w-full max-w-full aspect-[7/1] text-white text-lg bg-red-500 font-bold rounded-lg py-2 px-4 flex flex-row justify-center items-center drop-shadow-md">
                    Choose {{ get_chosen_ticket_name }}
                </div>
            </div>
        </PageContentComponent>
    </ion-page>
</template>