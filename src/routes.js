import { createWebHistory, createRouter } from "vue-router"
import Home from "./components/HelloWorld.vue"
import UserProfile from "./components/UserProfile.vue"

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home

    },
    {
        name: "Profile",
        path: "/profile/:name",
        component: UserProfile
    },
    // {
    //     name: "NotFound",
    //     path: "/:pathMatch(.*)*",
    //     component: NotFoundCompo
    // }
    // route for 404 page
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;