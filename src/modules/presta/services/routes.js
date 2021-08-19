import Home from '../views/Home.vue'
import About from '../views/About.vue'

export default [
    {
        path: '/',
        component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "presta-chunck" */ "../Presta.vue"),
        children: [
            {
                path: "",
                component: Home,
            },
            {
                path: "about",
                component: About,
            },
        ],
    }
]