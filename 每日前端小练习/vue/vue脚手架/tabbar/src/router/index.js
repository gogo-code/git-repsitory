import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/home/Home");
const Cart = () => import("../views/cart/Cart");
const Category = () => import("../views/category/Category");
const Profile = () => import("../views/profile/Profile");



// 1.安装插件
Vue.use(VueRouter);

// 解决路由跳转报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
return originalPush.call(this, location).catch(err => err)
}


// 2.创建路由对象
const routes = [
    {
        path: "",
        redirect: "/home",
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/cart",
        component: Cart,
    },
    {
        path: "/category",
        component: Category,
    },
    {
        path: "/profile",
        component: Profile,
    },
];
// 3.导出router
const router = new VueRouter({
    routes,
});
export default router;
