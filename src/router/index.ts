import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import StartPage from '../views/StartPage.vue'
import CartPage from '../views/CartPage.vue'
import DishPage from '../views/DishPage.vue'
import RestaurantPage from '../views/RestaurantPage.vue'
import TagPage from '../views/TagPage.vue'
import TicketOfferingPage from '../views/TicketOfferingPage.vue'
import TicketsPage from '../views/TicketsPage.vue'
import OrdersPage from '../views/OrdersPage.vue'
import { Preferences } from '@capacitor/preferences'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    redirect: '/start'
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/start',
    name: 'start',
    component: StartPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersPage
  },
  {
    path: '/dish_page/:dish_id',
    name: 'dish_page',
    component: DishPage
  },
  {
    path: '/restaurant_page/:restaurant_id',
    name: 'restaurant_page',
    component: RestaurantPage
  },
  {
    path: '/ticket_offering/:ticket_offering_id',
    name: 'ticket_offering',
    component: TicketOfferingPage
  },
  {
    path: '/tag_page/:tag_id',
    name: 'tag_page',
    component: TagPage
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: TicketsPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async function(to,from){
  let logged_in = await Preferences.get({key: 'current_user'})
  logged_in = logged_in.value
  if(logged_in == null){
    switch(to.name){
      case 'home':
        return {name: 'start'}
      case 'cart':
        return {name: 'start'}
      case 'dish_page':
        return {name: 'start'}
      case 'restaurant_page':
        return {name: 'start'}
      case 'ticket_offering':
        return {name: 'start'}
      case 'tag_page':
        return {name: 'start'}
      case 'tickets':
        return {name: 'start'}
      case 'orders':
        return {name: 'start'}
      default:
        return true
    }
  }else{
    switch(to.name){
      case 'root':
        return {name: 'home'}
      case 'start':
        return {name: 'home'}
      default:
        return true
    }
  }
})

export default router
