<script setup>
    import { IonPage, onIonViewDidEnter } from '@ionic/vue'
    import { useRouter } from 'vue-router'
    import { get_featured_items } from '../data.js'
    import { ref, onMounted } from 'vue'
    import SearchBarComponent from '../components/SearchBarComponent.vue'
    import BannerComponent from '../components/BannerComponent.vue'
    import FeaturedItemComponent from '../components/FeaturedItemComponent.vue'
    import TagCarrousselComponent from '@/components/TagCarrousselComponent.vue'
    import PageContentComponent from '@/components/PageContentComponent.vue'

    const featured_items = ref([])
    const page = ref()

    onIonViewDidEnter(() => {
        get_featured_items()
        .then(data => featured_items.value = data)
        .catch(err => console.log('Error'))
        page.value.update_cart_counter()
    })
</script>

<template>
    <ion-page class="flex flex-col">
        <PageContentComponent ref="page">
            <SearchBarComponent></SearchBarComponent>
            <TagCarrousselComponent></TagCarrousselComponent>
            <BannerComponent></BannerComponent>
            <div class="flex flex-col w-full gap-4">
                <label class="font-bold text-2xl text-dark">Featured items</label>
                <div class="flex flex-row flex-wrap gap-[20px] justify-start w-full min-w-full max-w-full">
                    <FeaturedItemComponent class="w-[calc((100%-2*20px)/3)] min-w-[calc((100%-2*20px)/3)] max-w-[calc((100%-2*20px)/3)]" v-for="featured_item in featured_items" v-bind="featured_item"></FeaturedItemComponent>
                </div>
            </div>
        </PageContentComponent>
    </ion-page>
</template>