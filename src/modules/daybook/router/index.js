export default {
    name:"daybook",
    component: () => import(/* webpackChunkName: "daybook" */ '../layouts/daybookLayout.vue'),
    children: [

        {
            path:"",
            name:"no-entry",
            component: () => import(/* webpackChunkName: "no-entry" */ '../views/noentry.vue'),

        },

        {
            path:":id",
            name:"entry",
            component: () => import(/* webpackChunkName: "no-entry" */ '../views/entryvue.vue'),

        }
    ]
}