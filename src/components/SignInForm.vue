<script setup>

    import { onMounted, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { login } from '../data.js'
    import { Toast } from '@capacitor/toast'

    const self = ref()
    const router = useRouter()
    const status = ref()
    const username = ref()
    const password = ref()

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

    function go_to_sign_up_page(){
        emit('go_to_sign_up')
    }

    function try_sign_in(){
        let data = {
            username: username.value,
            password: password.value
        }

        login(data)
        .then(data => emit('user_signed_in'))
        .catch(async function(err){ await Toast.show({text: 'Invalid login data'}) })
    }

    defineExpose({
        show,
        hide
    })

    const emit = defineEmits([
        'go_to_sign_up',
        'user_signed_in'
    ])

    onMounted(() => {
        hide()
    })
</script>

<template>
    <div ref="self" class="bg-[#FF6A00] z-[10] rounded-lg p-5 pb-12 flex-col gap-6 absolute">
        <label class="text-white text-xl font-bold self-center">Access your account</label>
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
                <label class="text-white">Username</label>
                <input v-model="username" type="text" class="text-dark drop-shadow-md rounded-md py-2 px-2 bg-[#FFCA99]">
            </div>
            <div class="flex flex-col gap-1">
                <label class="text-white">Password</label>
                <input v-model="password" type="password" class="text-dark drop-shadow-md rounded-md py-2 px-2 bg-[#FFCA99]">
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <button @click="try_sign_in" class="bg-[#FF0F0F] text-white text-2xl hover:bg-[#ff2f2f] rounded-lg py-2 drop-shadow-md">Sign in</button>
            <a @click="go_to_sign_up_page" class="text-white">Don't have an account? <span class="font-bold">Sign up</span></a>
        </div>
    </div>
</template>