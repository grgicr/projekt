import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import Register from './views/RegisterForm.vue';

// Definicija ruta
const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register }
];

// Kreiranje router instance
const router = createRouter({
    history: createWebHistory(),
    routes
});

// Kreiranje i montiranje aplikacije
const app = createApp(App);
app.use(router);
app.mount('#app');

export default router;
