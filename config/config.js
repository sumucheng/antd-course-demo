export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true,
        }],
    ],
    proxy: {
        "/dev": {
            target: "http://jsonplaceholder.typicode.com",
            changeOrigin: true,
            pathRewrite: { "^/dev": "" } // 把 dev 重写掉
        }
    },
    // routes: [
    //     {
    //         path: '/',
    //         component: '../layout',
    //         routes: [
    //             { path: '/', component: './HelloWorld' },
    //             { path: '/puzzlecards', component: './Puzzlecards' },
    //             { path: '/helloworld', component: './HelloWorld' },
    //             { path: '/list', component: './list' },
    //             {
    //                 path: '/dashboard', routes: [
    //                     { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
    //                     { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
    //                     { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
    //                 ]
    //             },

    //         ]
    //     },

    // ],
}