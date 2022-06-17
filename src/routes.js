const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('@/pages/HomePage.vue')
    },
    {
        name: 'User Details',
        path: '/user/:idUser',
        component: () => import('@/pages/DetailsUser.vue')
    }
];

export default routes;