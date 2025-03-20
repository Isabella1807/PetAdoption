import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pets',
      name: 'pets',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PetListView.vue'),
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddPetView.vue'),
    },
    {
      path: '/pets/:id',
      name: 'pet',
      component: () => import('../views/PetDetailView.vue'),
    },
  ],
})

export default router
