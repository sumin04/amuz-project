import axios from 'axios'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import getData from "./components/getData.vue"
import UserDetail from './components/UserDetail.vue'
import UserList from './components/UserList.vue'

const routes = [
  { name: 'home', path:'/',component: getData},
  { name: 'detail', path:'/detail/:userId',component: UserDetail},
  // { name: 'profile', path:'/user/:userId?',component: UserProfile},
  { name: 'list', path:'/user/:listId',component: UserList},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')

app.config.globalProperties.$axios = axios
