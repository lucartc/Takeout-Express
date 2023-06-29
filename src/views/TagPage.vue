<script setup>
    import { IonPage, onIonViewDidEnter } from '@ionic/vue'
    import { get_tag_dishes, get_tags } from '../data.js'
    import { useRoute } from 'vue-router'
    import { ref, computed } from 'vue'
    import PageContentComponent from '@/components/PageContentComponent.vue'
    import FeaturedItemComponent from '@/components/FeaturedItemComponent.vue'

    const route = useRoute()
    const tags = ref([])
    const dishes = ref([])
    const page = ref()

    const get_tag_image = computed(() => {
        if(tags.value.length == 0){
            return 'icons/dummy.svg'
        }else{
            let chosen_tag = tags.value
                            .filter(tag => tag.id == route.params.tag_id)
                            .pop()

            return chosen_tag?.icon
        }
    })

    const get_tag_name = computed(() => {
        let chosen_tag = tags.value
                        .filter(tag => tag.id == route.params.tag_id)
                        .pop()

        if(chosen_tag){
            return chosen_tag.name[0].toUpperCase()+chosen_tag.name.substring(1)
        }else{
            return null
        }
    })

    onIonViewDidEnter(() => {
        let data = {
            id: route.params.tag_id
        }
        get_tag_dishes(data)
        .then(data => dishes.value = data)
        .catch(err => console.log('Error'))

        get_tags()
        .then(data => tags.value = data)
        .catch(err => console.log('Error'))

        page.value.update_cart_counter()
    })
</script>

<template>
    <ion-page class="flex flex-col justify-start">
        <PageContentComponent ref="page">
            <div class="flex flex-row gap-4 w-full min-w-full max-w-full aspect-[5/1]">
                <img class="h-full min-h-full max-h-full aspect-square rounded-lg" :src="get_tag_image">
                <div class="flex flex-col gap-1">
                    <label class="text-dark text-xl font-bold">{{ get_tag_name }}</label>
                    <label class="text-sm text-dark">{{ dishes.length }} items</label>
                </div>
            </div>
            <div class="w-full min-w-full max-w-full flex flex-row flex-wrap justify-start gap-[20px]">
                <FeaturedItemComponent class="w-[calc((100%-2*20px)/3)] min-[calc((100%-2*20px)/3)] max-w-[calc((100%-2*20px)/3)]" v-for="dish in dishes" v-bind="dish"></FeaturedItemComponent>
            </div>
        </PageContentComponent>
    </ion-page>
</template>