import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import { markRaw } from 'vue'
import LayoutIndex from "@/layout/index.vue"
import { exitView } from "./components/index"
export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name:"container",
        component: LayoutIndex,
        redirect: "/home",
        meta: {
            title: "容器",
        },
        children: [
            {
                path: "/home",
                name: 'home',
                component: () => import(/* webpackChunkName:"group-user" */ '../views/home/index.vue'),
                meta: {
                    title: "主页",
                }
            }, {
                path: "/aaa",
                name: 'aaa',
                component: markRaw(exitView),
                meta: {
                    title: "啊啊啊"
                },
                children: [
                    {
                        path: "aaa_son",
                        name: "aaa_son",
                        component: exitView,
                        meta: {
                            title: "啊啊啊的儿砸"
                        },
                        children: [
                            {
                                path: "aaa_sun",
                                name: "aaa_sun",
                                component: () => import('../views/demo/aaa_sun.vue'),
                                meta: {
                                    title: "孙子"
                                },
                            }
                        ]
                    },{
                                
                        path:'aaa_boy',
                        name: "aaa_boy",
                        component: () => import('../views/demo/aaa_boy.vue'),
                        meta: {
                            title: "hahahahh"
                        },
                }
                ]
            }, {
                path: "/bbb",
                name: 'bbb',
                component: markRaw(exitView),
                meta: {
                    title: "不不不"
                },
                children: [
                    {
                        path: "bbb_son",
                        name: "bbb_son",
                        component: () => import('../views/demo/bbb_son.vue'),
                        meta: {
                            title: "不不不的儿砸"
                        },
                    }
                ]
            }, {
                path: "/ccc",
                name: 'ccc',
                component: () => import(/* webpackChunkName:"group-user" */ '../views/demo/ccc.vue'),
                meta: {
                    title: "错错错"
                }
            }, {
                path: "/ddd",
                name: 'ddd',
                component: () => import(/* webpackChunkName:"group-user" */ '../views/demo/ddd.vue'),
                meta: {
                    title: "顶顶顶"
                }
            }, {
                path: "/eee",
                name: 'eee',
                component: () => import(/* webpackChunkName:"group-user" */ '../views/demo/eee.vue'),
                meta: {
                    title: "呃呃呃"
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