import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import { QuillEditor } from '@vueup/vue-quill'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import '@vueup/vue-quill/dist/vue-quill.snow.css'

const app = createApp(App)
app.component('QuillEditor', QuillEditor)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.mount('#app')
