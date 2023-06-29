<script setup>
    import { ref, computed } from 'vue'
    import { IonImg } from '@ionic/vue'

    const total_order_price = computed(() => {
        return props.items.map(item => {
            return item.total_price
        }).reduce((acc,item) => acc+item)
    })

    const get_first_item_icon = computed(() => {
        if(props.items.length > 0){
            return props.items[0].icon
        }else{
            return 'icons/dummy.svg'
        }
    })

    const props = defineProps({
        id: {type: Number}, 
        user_id: {type: Number},
        date: {type: String},
        code: {type: String},
        reviewed: {type: Boolean},
        items: {type: Array}
    })

    const icon = ref()
    const show_items = ref(false)

    function toggle_items(){
        if(show_items.value){
            icon.value.className = 'w-[20%] min-w-[20%] max-w-[20%] aspect-[1/1] rounded-l-lg overflow-hidden'
            hide()
        }else{
            icon.value.className = 'w-[20%] min-w-[20%] max-w-[20%] aspect-[1/1] rounded-tl-lg overflow-hidden'
            show()
        }
    }

    function show(){
        show_items.value = true
    }

    function hide(){
        show_items.value = false
    }
</script>

<template>
    <div @click="toggle_items" class="flex flex-col w-full rounded-lg drop-shadow-md">
        <div class="flex flex-row w-full">
            <div ref="icon" class="w-[20%] min-w-[20%] max-w-[20%] aspect-[1/1] rounded-tl-lg overflow-hidden">
                <img class="rounded-l-lg h-full min-h-full max-h-full w-full min-w-full max-w-full object-cover" :src="get_first_item_icon">
            </div>
            <div class="flex flex-col gap-2 p-3 grow">
                <div class="flex flex-row justify-between w-full">
                    <label class="text-xs text-dark">#{{ code }}</label>
                    <label class="font-bold text-dark">${{ total_order_price.toFixed(2) }}</label>
                </div>
                <label class="text-xs text-dark">Ordered in {{ date }}</label>
            </div>
        </div>
        <div v-if="show_items" class="flex flex-col bg-gray-100 w-full min-w-full max-w-full box-border rounded-b-lg p-4 gap-3 relative">
            <span v-for="item in props.items" class="text-sm overflow-hidden text-ellipsis whitespace-nowrap text-dark">{{ item.quantity }}x {{ item.name }}, ${{ item.total_price.toFixed(2) }}</span>
        </div>
    </div>
</template>