<script setup>
    import { get_ticket_offerings } from '../data.js'
    import { ref, onMounted } from 'vue'
    import { useRouter } from 'vue-router'

    const ticket_offerings = ref([])
    const router = useRouter()

    onMounted(() => {
        get_ticket_offerings()
        .then(data => {
            ticket_offerings.value = data
            setTimeout(observe_banner_movement,50)
        })
        .catch(err => console.log('Error',err))
    })

    function observe_banner_movement(){
        let banners = document.querySelectorAll('#carroussel img')

        if(banners.length <= 0){
            setTimeout(observe_banner_movement,50)
            return
        }else{
            banners.forEach(banner => {
                let options = {
                    root: null,
                    rootMargin: "0px",
                    threshold: 1.0
                }

                let observer = new IntersectionObserver(update_carroussel_pills,options)
                observer.observe(banner)
            })
        }
    }

    function update_carroussel_pills(entries,observer){
        entries.forEach(entry => {
            if(entry.isIntersecting){
                let banner_index = parseInt(entry.target.id.split('_').pop())-1
                let pills = Array.from(document.querySelector('.pills').children)
                pills.forEach((pill,index) => {
                    if(index == banner_index){
                        pill.className = 'bg-gray-950 w-[3%] aspect-square rounded-[100%]'
                    }else{
                        pill.className = 'bg-gray-400 w-[3%] aspect-square rounded-[100%]'
                    }
                })
            }
        })
    }

    function go_to_offer_page(offer){
        router.push({name: 'ticket_offering', params: {ticket_offering_id: offer.id}})
    }
</script>

<template>
    <div class="flex flex-col gap-4 w-full">
        <div id="carroussel" class="flex flex-row overflow-x-scroll snap-x w-full aspect-[2/1]">
            <div @click="go_to_offer_page(offer)" v-for="offer in ticket_offerings" class="flex flex-row justify-center items-center relative min-w-full min-h-full bg-red-500 rounded-lg">
                <img :id="'ticket_offering_'+offer.id" class="absolute w-full h-full brightness-75 rounded-lg bg-red-700 drop-shadow-md snap-center" :src="offer.banner">
                <div class="flex flex-col absolute top-[20px] left-[20px] gap-2">
                    <label class="text-4xl font-bold text-white">{{ offer.title }}</label>
                    <label class="text-xl text-white">{{ offer.subtitle }}</label>
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-center gap-2 pills">
            <div v-for="offer in ticket_offerings" :class="[offer.id == 1 ? 'bg-gray-950' : 'bg-gray-400','w-[3%]','aspect-square','rounded-[100%]']"></div>
        </div>
    </div>
</template>