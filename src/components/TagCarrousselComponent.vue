<script setup>
    import { IonImg, onIonViewDidEnter } from '@ionic/vue'
    import { get_tags } from '../data.js'
    import { ref, onMounted } from 'vue'
    import { useRouter } from 'vue-router'
    import { Toast } from '@capacitor/toast'

    const tags = ref()
    const router = useRouter()

    function go_to_tag_page(tag){
        router.push({name: 'tag_page', params: {tag_id: tag.id}})
    }

    onMounted(() => {
        get_tags()
        .then(data => tags.value = data)
        .catch(async function(err){ await Toast.show({text: 'Error'}) })
    })
</script>

<template>
    <div class="flex flex-row gap-2 snap-x overflow-x-scroll overflow-y-hidden py-2 box-border w-full min-h-[60px]">
        <div @click="go_to_tag_page(tag)" v-for="tag in tags" class="flex flex-row bg-red-200 aspect-square rounded-lg min-h-[50px] snap-start drop-shadow-md relative justify-center items-center">
            <img class="absolute hover:brightness-50 w-full h-full rounded-lg drop-shadow-md" :src="tag.icon">
            <label class="hidden z-[1] text-xs text-white">{{ tag.name }}</label>
        </div>
    </div>
</template>