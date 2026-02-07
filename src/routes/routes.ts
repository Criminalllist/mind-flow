export const routes = [
  { path: '/', name: 'home', component: () => import('@/views/HomeView.vue')},
  { path: '/statistics', name: 'statistics', component: () => import('@/views/StatisticsView.vue')}
]