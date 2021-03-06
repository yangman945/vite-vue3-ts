import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import LayoutIndex from "@/layout/index.vue"
export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: LayoutIndex,
        redirect: "/home",
        meta:{
            title:"容器",
        },
        children: [
            {
                path: "/home",
                name: 'home',
                component: () => import(/* webpackChunkName:"group-user" */ '../views/home/index.vue'),
                meta:{
                    title:"主页"
                }
            },{
                path: "/aaa",
                name: 'aaa',
                component: () => import(/* webpackChunkName:"group-user" */ '../views/demo/aaa.vue'),
                meta:{
                    title:"啊啊啊"
                }
            },{
                path: "/bbb",
                name: 'bbb',
                component: () => import(/* webpackChunkName:"group-user" */ '../views/demo/bbb.vue'),
                meta:{
                    title:"不不不"
                }
            },{
                path: "/ccc",
                name: 'ccc',
                component: () => import(/* webpackChunkName:"group-user" */ '../views/demo/ccc.vue'),
                meta:{
                    title:"错错错"
                }
            },{
                path: "/ddd",
                name: 'ddd',
                component: () => import(/* webpackChunkName:"group-user" */ '../views/demo/ddd.vue'),
                meta:{
                    title:"顶顶顶"
                }
            },{
                path: "/eee",
                name: 'eee',
                component: () => import(/* webpackChunkName:"group-user" */ '../views/demo/eee.vue'),
                meta:{
                    title:"呃呃呃"
                }
            }
        ]
    },
]
const router = createRouter({
    routes: routes as any,
    history: createWebHashHistory()
});
export default router;