import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './pages/coaches/CoachesList';
import CoachDetails from './pages/coaches/CoachDetails';
import CoachRegistration from './pages/coaches/CoachRegistration';
import ContactCoach from './pages/requests/ContactCoach'
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import ErrorPage from './pages/ErrorPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches'},
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsReceived},
    { path: '/:notFound(.*)', component: ErrorPage}
  ],
});

export default router;
