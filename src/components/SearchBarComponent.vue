<script setup>
    import { IonImg } from '@ionic/vue'
    import { ref,computed } from 'vue'
    import { search } from '../data.js'
    import RestaurantSearchBarItem from '@/components/RestaurantSearchBarItem.vue'
    import DishSearchBarItem from '@/components/DishSearchBarItem.vue'

    const search_string = ref()
    const restaurants = ref([])
    const dishes = ref([])

    const are_dishes_set = computed(() => {
        return dishes.value.length > 0
    })

    const are_restaurants_set = computed(() => {
        return restaurants.value.length > 0
    })

    const show_results = computed(() => {
        if(restaurants.value.length > 0 || dishes.value.length > 0){
            return true
        }else{
            return false
        }
    })

    function hide_search_results(){
        setTimeout(function(){
            dishes.value = []
            restaurants.value = []
        },50)
    }

    function update_search_results(){
        let data = {
            search_string: search_string.value
        }

        search(data)
        .then(data => {
            data.restaurants.then(results => {
                restaurants.value = results
            })
            .catch(err => console.log('Error'))

            data.dishes.then(results => {
                dishes.value = results
            })
            .catch(err => console.log('Error'))
        })
        .catch(err => console.log('Error'))
    }
</script>

<template>
    <div class="w-full flex flex-row gap-2 relative">
        <input @keyup="update_search_results" @focusout="hide_search_results" v-model="search_string" class="grow drop-shadow-md p-3 text-dark bg-gray-100 box-border rounded-lg" type="text">
        <button @click="update_search_results" class="rounded-lg bg-red-500 p-3 box-border flex flex-row justify-center items-center">
            <ion-img src="icons/search.svg"></ion-img>
        </button>
        <div v-if="show_results" class="flex gap-4 flex-col w-full max-h-[200px] drop-shadow-md rounded-b-lg bg-gray-200 absolute left-0 top-[100%] z-[1] overflow-y-scroll p-3 box-border">
            <div v-if="are_restaurants_set" class="flex flex-col gap-4 w-full">
                <label class="font-bold text-dark">Restaurants</label>
                <div class="flex flex-col gap-2 w-full">
                    <RestaurantSearchBarItem v-for="restaurant in restaurants" v-bind="restaurant"></RestaurantSearchBarItem>
                </div>
            </div>
            <div v-if="are_dishes_set" class="flex flex-col gap-4 w-full">
                <label class="font-bold text-dark">Dishes</label>
                <div class="flex flex-col gap-2 w-full">
                    <DishSearchBarItem v-for="dish in dishes" v-bind="dish"></DishSearchBarItem>
                </div>
            </div>
        </div>
    </div>
</template>