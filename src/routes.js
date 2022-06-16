const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('@/pages/HomePage.vue')
    },
    {
        name: 'Details',
        path: '/details',
        component: () => import('@/pages/DetailsPage.vue')
    }
];

export default routes;