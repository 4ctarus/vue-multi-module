import Home from '../views/Home.vue'
import About from '../views/About.vue'

export default [
    {
        path: '/',
        component: () => import("../Presta.vue"),
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