import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Main from './views/Main.vue'
import Articles from './views/Articles.vue'
import SamplePost from './components/articles/SamplePost.vue'

const routes = [
  { path: '/', component: Main },
  {
    path: '/articles',
    component: Articles,
    children: [{ path: 'sample', component: SamplePost }]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
