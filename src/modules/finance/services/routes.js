import FinancementBilan from '../views/FinancementBilan'

export default [
    {
        path: '/',
        component: () => import(/* webpackPrefetch: true */ /* webpackChunkName: "user-chunck" */ "../AppFinance.vue"),
        children: [
            {
                path: "",
                component: FinancementBilan,
            }
        ]
    }
]