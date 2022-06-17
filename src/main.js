import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import VueWriter from "vue-writer";

import { createI18n } from 'vue-i18n'
import ruLang from "../locales/ru"

const i18n = createI18n({
  locale: "ru",
  messages: {
    ru: ruLang
  },
})

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(i18n)
app.use(VueWriter)

app.mount('#app')
