import { createRouter, createWebHistory } from "vue-router";
import WelcomeScreen from "@/components/WelcomeScreen.vue";
import DrugaStranica from "@/components/DrugaStranica.vue";
import TrecaStranica from "@/components/TrecaStranica.vue";
import Registracija from "@/components/Registracija.vue";
import Login from "@/components/Login.vue
import { createRouter, createWebHistory } from 'vue-router';
import Registracija from '../components/Registracija.vue'; //

const routes = [
    {
        path: '/',
        name: 'Registracija',
        component: Registracija,
    };
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

const routes = [
    {
        path: "/",
        name: "WelcomeScreen",
        component: WelcomeScreen,
    },
    {
        path: "/second",
        name: "DrugaStranica",
        component: DrugaStranica,
    },
    {
        path: "/third",
        name: "TrecaStranica",
        component: TrecaStranica,
    },
    {
    path: "/register",
    name: "Registracija",
    component: Registracija,
    },

    {
        path: '/login',
        name: 'LoginPage',
        component: Login,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
