<script setup lang="ts">
import {
  IonPage,
  onIonViewDidEnter,
  useBackButton
} from '@ionic/vue';

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SignInForm from '@/components/SignInForm.vue'
import SignUpForm from '@/components/SignUpForm.vue'
import { LocalNotifications } from '@capacitor/local-notifications';

const router = useRouter()
const img = ref()
const sign_in_form = ref()
const sign_up_form = ref()
useBackButton(0,() => {
  sign_in_form.value.hide()
  sign_up_form.value.hide()
})

function show_sign_in_form(){
  sign_up_form.value.hide()
  sign_in_form.value.show()
}

function show_sign_up_form(){
  sign_in_form.value.hide()
  sign_up_form.value.show()
}

function go_to_home_page(){
  router.push('/home')
}

onIonViewDidEnter(async() => {
  LocalNotifications.requestPermissions()
})
</script>

<template>
  <ion-page class="bg-background flex flex-col items-center pt-16 p-5">
    <img :src="'takeout_express_text_logo.svg'" ref="img" class="w-[70%] min-w-[70%] max-w-[70%]">
    <div class="flex flex-col gap-2 absolute bottom-[60px] z-[1] items-center">
      <button class="bg-[#FF0F0F] text-white text-2xl hover:bg-[#ff2f2f] rounded-lg py-3 w-[200px]" @click="show_sign_in_form">Sign in</button>
      <a @click="show_sign_up_form" class="text-[#450808] hover:text-[#fd0f0f]">Don't have an account? <span class="font-bold">Sign Up</span></a>
    </div>
    <ion-img src="takeout_express_front_page_illustration.svg" class="absolute bottom-0 w-full z-[-1]" ref="img"></ion-img>
    <SignInForm
    @user_signed_in="go_to_home_page"
    @go_to_sign_up="show_sign_up_form"
    ref="sign_in_form"/>
    <SignUpForm
    @user_signed_up="show_sign_in_form"
    @go_to_sign_in="show_sign_in_form"
    ref="sign_up_form"/>
  </ion-page>
</template>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
