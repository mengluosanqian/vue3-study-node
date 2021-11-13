import {
    createRouter,
    createWebHashHistory
} from "vue-router";
const routes = [{
        path: "/testhook",
        name: "testhook",
        component: () => import("@/vue-learning/src/test-hook")
    },
    {
        path: "/testShallow",
        name: "testShallow",
        component: () => import("@/vue-learning/src/test-shallow")
    },
    {
        path: "/testCustomRef",
        name: "testCustomRef",
        component: () => import("@/vue-learning/src/test-customRef")
    },
    {
        path: "/testReadonly",
        name: "testReadonly",
        component: () => import("@/vue-learning/src/test-readonly")
    },
    {
        path: "/testRaw",
        name: "testRaw",
        component: () => import("@/vue-learning/src/test-raw")
    },
    {
        path: "/testToref",
        name: "testToref",
        component: () => import("@/vue-learning/src/test-toref")
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
//在main.js中进行引入，并进行挂载注册到全局上