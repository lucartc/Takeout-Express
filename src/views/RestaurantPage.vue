<script setup>
    import { IonPage, onIonViewDidEnter } from '@ionic/vue'
    import {
        get_restaurant,
        get_restaurant_dishes,
        get_restaurant_schedule,
        get_restaurant_reviews,
        get_restaurant_contacts
    } from '../data.js'
    import PageContentComponent from '@/components/PageContentComponent.vue'
    import RestaurantCardComponent from '@/components/RestaurantCardComponent.vue'
    import RestaurantPageDishComponent from '@/components/RestaurantPageDishComponent.vue'
    import { ref, computed } from 'vue'
    import { useRoute } from 'vue-router'
    import { Toast } from '@capacitor/toast'

    const route = useRoute()
    const restaurant = ref({})
    const dishes = ref([])
    const schedule = ref()
    const contacts = ref([])
    const reviews = ref([])
    const rating = ref(0)
    const active_tab = ref('dishes')
    const dishes_button = ref()
    const info_button = ref()
    const reviews_button = ref()
    const page = ref()

    const dishes_tab_is_active = computed(() => {
        return active_tab.value == 'dishes'
    })

    const info_tab_is_active = computed(() => {
        return active_tab.value == 'info'
    })
    const reviews_tab_is_active = computed(() => {
        return active_tab.value == 'reviews'
    })

    function show_dishes(){
        active_tab.value = 'dishes'
        dishes_button.value.className = 'flex flex-row justify-center items-center text-dark bg-gray-100 px-4 py-1 rounded-t-md'
        info_button.value.className = 'flex flex-row justify-center items-center text-white bg-gray-700 px-4 py-1 rounded-t-md'
        reviews_button.value.className = 'flex flex-row justify-center items-center text-white bg-gray-700 px-4 py-1 rounded-t-md'
    }
    function show_info(){
        active_tab.value = 'info'
        dishes_button.value.className = 'flex flex-row justify-center items-center text-white bg-gray-700 px-4 py-1 rounded-t-md'
        info_button.value.className = 'flex flex-row justify-center items-center text-dark bg-gray-100 px-4 py-1 rounded-t-md'
        reviews_button.value.className = 'flex flex-row justify-center items-center text-white bg-gray-700 px-4 py-1 rounded-t-md'
    }
    function show_reviews(){
        active_tab.value = 'reviews'
        dishes_button.value.className = 'flex flex-row justify-center items-center text-white bg-gray-700 px-4 py-1 rounded-t-md'
        info_button.value.className = 'flex flex-row justify-center items-center text-white bg-gray-700 px-4 py-1 rounded-t-md'
        reviews_button.value.className = 'flex flex-row justify-center items-center text-dark bg-gray-100 px-4 py-1 rounded-t-md'
    }

    onIonViewDidEnter(() => {
        let data = {
            id: route.params.restaurant_id
        }

        get_restaurant(data)
        .then(data => {
            restaurant.value = data
            let params = { id: restaurant.value.id }
            return get_restaurant_dishes(params)
        })
        .then(data => {
            dishes.value = data
            let params = { id: restaurant.value.id }
            return get_restaurant_schedule(params)
        })
        .then(data => {
            schedule.value = data
            let params = { id: restaurant.value.id }
            return get_restaurant_contacts(params)
        })
        .then(data => {
            contacts.value = data
            let params = { id: restaurant.value.id }
            return get_restaurant_reviews(params)
        })
        .then(data => {
            rating.value = data.rating
            reviews.value = data.reviews
        })
        .catch(async function(err){ await Toast.show({text: 'Error'}) })

        update_cart()
    })

    function update_cart(){
        page.value.update_cart_counter()
    }
</script>

<template>
    <ion-page class="flex flex-col justify-start">
        <PageContentComponent ref="page">
            <RestaurantCardComponent v-bind="restaurant"></RestaurantCardComponent>
            <div class="flex flex-col w-full aspect-[2/1] rounded-lg">
                <div class="flex flex-row gap-1">
                    <div ref="dishes_button" @click="show_dishes" class="flex flex-row justify-center text-dark items-center bg-gray-100 px-4 py-1 rounded-t-md">Dishes</div>
                    <div ref="info_button" @click="show_info" class="flex flex-row justify-center items-center bg-gray-700 text-white px-4 py-1 rounded-t-md">Info</div>
                    <div ref="reviews_button" @click="show_reviews" class="flex flex-row justify-center items-center bg-gray-700 text-white px-4 py-1 rounded-t-md">Reviews</div>
                </div>
                <div v-if="dishes_tab_is_active" class="p-4 box-border w-full bg-gray-100 rounded-tr-lg rounded-b-lg drop-shadow-md">
                    <div class="flex flex-col gap-3">
                        <RestaurantPageDishComponent :key="new Date()" @added_item_to_cart="update_cart" v-for="dish in dishes" v-bind="dish"></RestaurantPageDishComponent>
                    </div>
                </div>
                <div v-if="info_tab_is_active" class="p-4 box-border w-full bg-gray-100 rounded-tr-lg rounded-b-lg drop-shadow-md">
                    <div class="flex flex-col gap-3">
                        <div class="flex flex-col">
                            <div class="flex flex-row w-full gap-2 items-center min-w-full max-w-full aspect-[10/1]" v-for="contact in contacts">
                                <img class="aspect-square h-[70%] min-h-[70%] max-h-[70%]" :src="'icons/instagram.svg'">
                                <a :href="contact.link">{{ contact.name }}</a>
                            </div>
                        </div>
                        <div class="flex flex-col w-[100%] min-w-[100%] max-w-[100%] bg-yellow-500 overflow-hidden rounded-lg drop-shadow-md">
                            <div class="flex flex-row">
                                <div class="text-gray-100 flex flex-row justify-center items-center p-2 w-[25%] min-w-[25%] max-w-[25%] bg-red-700">Sun</div>
                                <div class="flex flex-row justify-center items-center bg-gray-100 w-[75%] min-w-[75%] max-w-[75%] text-dark">{{ schedule.sunday.start }} - {{ schedule.sunday.end }}</div>
                            </div>
                            <div class="flex flex-row">
                                <div class="text-gray-100 flex flex-row justify-center items-center p-2 w-[25%] min-w-[25%] max-w-[25%] bg-background">Mon</div>
                                <div class="flex flex-row justify-center items-center bg-gray-200 w-[75%] min-w-[75%] max-w-[75%] text-dark">{{ schedule.monday.start }} - {{ schedule.monday.end }}</div>
                            </div>
                            <div class="flex flex-row">
                                <div class="text-gray-100 flex flex-row justify-center items-center p-2 w-[25%] min-w-[25%] max-w-[25%] bg-red-700">Tue</div>
                                <div class="flex flex-row justify-center items-center bg-gray-100 w-[75%] min-w-[75%] max-w-[75%] text-dark">{{ schedule.tuesday.start }} - {{ schedule.tuesday.end }}</div>
                            </div>
                            <div class="flex flex-row">
                                <div class="text-gray-100 flex flex-row justify-center items-center p-2 w-[25%] min-w-[25%] max-w-[25%] bg-background">Wed</div>
                                <div class="flex flex-row justify-center items-center bg-gray-200 w-[75%] min-w-[75%] max-w-[75%] text-dark">{{ schedule.wednesday.start }} - {{ schedule.wednesday.end }}</div>
                            </div>
                            <div class="flex flex-row">
                                <div class="text-gray-100 flex flex-row justify-center items-center p-2 w-[25%] min-w-[25%] max-w-[25%] bg-red-700">Thu</div>
                                <div class="flex flex-row justify-center items-center bg-gray-100 w-[75%] min-w-[75%] max-w-[75%] text-dark">{{ schedule.thursday.start }} - {{ schedule.thursday.end }}</div>
                            </div>
                            <div class="flex flex-row">
                                <div class="text-gray-100 flex flex-row justify-center items-center p-2 w-[25%] min-w-[25%] max-w-[25%] bg-background">Fri</div>
                                <div class="flex flex-row justify-center items-center bg-gray-200 w-[75%] min-w-[75%] max-w-[75%] text-dark">{{ schedule.friday.start }} - {{ schedule.friday.end }}</div>
                            </div>
                            <div class="flex flex-row">
                                <div class="text-gray-100 flex flex-row justify-center items-center p-2 w-[25%] min-w-[25%] max-w-[25%] bg-red-700">Sat</div>
                                <div class="flex flex-row justify-center items-center bg-gray-100 w-[75%] min-w-[75%] max-w-[75%] text-dark">{{ schedule.saturday.start }} - {{ schedule.saturday.end }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="reviews_tab_is_active" class="p-4 box-border w-full bg-gray-100 rounded-tr-lg rounded-b-lg drop-shadow-md">
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-col gap-1 justify-center items-center p-2 box-border w-full min-w-full max-w-full">
                            <label class="text-dark">{{ rating.toFixed(2) }} stars out of 5 in {{ reviews.length }} reviews</label>
                            <div class="flex flex-row gap-1">
                                <img :src="'icons/star.svg'">
                                <img :src="'icons/star.svg'">
                                <img :src="'icons/star.svg'">
                                <img :src="'icons/star.svg'">
                                <img :src="'icons/star.svg'">
                            </div>
                        </div>
                        <div v-if="reviews.length > 0">
                            <div class="flex flex-row w-full gap-2 p-2 box-border min-w-full max-w-full aspect-[5/1] drop-shadow-md bg-gray-100" v-for="review in reviews">
                                <img class="h-full min-h-full max-h-full aspect-square rounded-lg" :src="review.icon">
                                <div class="flex flex-col">
                                    <label class="text-dark">{{ review.name }}</label>
                                    <label class="text-xs text-dark">At {{ review.date }}</label>
                                </div>
                                <div class="ml-auto self-center rounded-lg gap-1 flex flex-row p-2 box-border h-[60%] min-h-[60%] max-h-[60%] aspect-[2/1] justify-center items-center bg-yellow-500 drop-shadow-md">
                                    <label class="text-xs text-dark">
                                        {{ review.stars }}
                                    </label>
                                    <img class="h-full min-h-full max-h-full" :src="'icons/star.svg'">
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row justify-center items-center text-dark" v-else>
                            There are no reviews in this store yet
                        </div>
                    </div>
                </div>
            </div>
        </PageContentComponent>
    </ion-page>
</template>