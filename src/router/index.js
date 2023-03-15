import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: "/", component: () => import("../views/Home.vue") },
    { path: "/registeR", component: () => import("../views/Register.vue") },
    { path: "/sign-in", component: () => import("../views/Signin.vue") },
    {
      path: "/feed",
      component: () => import("../views/Feed.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

const getCurrentUser = () => { 
    return new Promise((resolve,reject) => {
        const removeLister = onAuthStateChanged(
            getAuth(),
            (user) => { 
                removeLister(); 
                resolve(user);
            },
            reject
        );
    });
};




router.beforeEach(async(to,from,next) => { 
    if(to.matched.some((record) => record.meta.requiresAuth)) { 
        if  (await getCurrentUser) { 
            next(); 
        } else { 
            alert ("you dont have access! "); 
            next("/"); 
        }
    }

}); 

export default router;
