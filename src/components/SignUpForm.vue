<script setup>
    import { onMounted, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import StatusComponent from '@/components/StatusComponent.vue'
    import { register } from '../data.js'

    const self = ref()
    const router = useRouter()
    const status = ref()
    const username = ref()
    const password = ref()
    const confirm_password = ref()

    function try_sign_up(){
        if(password.value.value == confirm_password.value.value){

            let data = {
                username: username.value,
                password: password.value,
            }

            register(data)
            .then(data => emit('user_signed_up'))
            .catch(data => console.log('error: ',data))
        }
    }

    function show(){
        self.value.style.display = 'flex'
        self.value.style.bottom = '-10px'
        self.value.style.top = null
    }

    function hide(){
        self.value.style.display = 'none'
        self.value.style.top = '100%'
        self.value.style.bottom = null
    }

    function go_to_sign_in_page(){
        emit('go_to_sign_in')
    }

    defineExpose({
        show,
        hide
    })

    const emit = defineEmits([
        'go_to_sign_in',
        'user_signed_up'
    ])

    onMounted(() => {
        hide()
    })
</script>

<template>
    <div ref="self" class="bg-[#FF6A00] z-[10] rounded-lg p-5 pb-12 flex-col gap-6 absolute">
        <StatusComponent class="self-center" ref="status">Status message</StatusComponent>
        <label class="text-white text-xl font-bold self-center">Create your account</label>
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
                <label class="text-white">Username</label>
                <input v-model="username" type="text" class="text-dark drop-shadow-md rounded-md py-2 px-2 bg-[#FFCA99]">
            </div>
            <div class="flex flex-col gap-1">
                <label class="text-white">Password</label>
                <input v-model="password" type="password" class="text-dark drop-shadow-md rounded-md py-2 px-2 bg-[#FFCA99]">
            </div>
            <div class="flex flex-col gap-1">
                <label class="text-white">Confirm password</label>
                <input v-model="confirm_password" type="password" class="text-dark drop-shadow-md rounded-md py-2 px-2 bg-[#FFCA99]">
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <button @click="try_sign_up" class="bg-[#FF0F0F] text-white text-2xl hover:bg-[#ff2f2f] rounded-lg py-2 drop-shadow-md">Sign up</button>
            <a @click="go_to_sign_in_page" class="text-white">Already have an account? <span class="font-bold">Sign in</span></a>
        </div>
    </div>
</template>