<script setup>
    import { ref } from 'vue'
    import NavbarComponent from '@/components/NavbarComponent.vue'
    import FooterComponent from '@/components/FooterComponent.vue'

    const navbar = ref()
    const footer = ref()

    function update_footer(){
        footer.value.update_cart_items()
    }

    function update_cart_counter(){
        footer.value.update_cart_items()
    }

    defineExpose({
        update_cart_counter
    })
</script>

<template>
    <div class="flex flex-col h-full w-full bg-gray-100">
        <NavbarComponent ref="navbar"></NavbarComponent>
        <div class="overflow-y-scroll px-4 py-6 gap-6 box-border flex flex-col items-center w-full grow">
            <slot></slot>
        </div>
        <FooterComponent ref="footer"></FooterComponent>
    </div>
</template>