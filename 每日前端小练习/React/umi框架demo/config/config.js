export default {
  antd: {},
  dva: {
    hmr: true,
  },
  routes: [
    {
      path: "/",
      component: "../layout/BasicLayout",
      routes: [
        {
          path: "/",
          component: "HelloWorld",
        },
        {
          path: "helloworld",
          component: "HelloWorld",
        },
        {
          path: "puzzlecards",
          component: "puzzleCards",
        },
        {
          path: "dashboard",
          routes: [
            { path: "analysis", component: "dashboard/Analysis" },
            { path: "monitor", component: "dashboard/Monitor" },
            { path: "workplace", component: "dashboard/Workplace" },
          ],
        },
        {
          path: "blogmanager",
          component: "blogManager",
        },
        {
          name: "exception",
          icon: "warning",
          path: "/exception",
          hideInMenu: true,
          routes: [
            // exception
            // {
            //   path: "/exception/403",
            //   name: "not-permission",
            //   component: "./Exception/403",
            // },
            // {
            //   path: "/exception/404",
            //   name: "not-find",
            //   component: "./Exception/404",
            // },
            // {
            //   path: "/exception/500",
            //   name: "server-error",
            //   component: "./Exception/500",
            // },
            // {
            //   path: "/exception/trigger",
            //   name: "trigger",
            //   component: "./Exception/TriggerException",
            // },
          ],
        },
      ],
    },
  ],
  proxy: {
    "/dev": {
      target: "http://jsonplaceholder.typicode.com",
      changeOrigin: true,
      pathRewrite: { "^/dev": "" }, // 把 dev 重写掉
    },
    "/api": {
      target: "http://localhost:8012",
      changeOrigin: true,
      pathRewrite: { "^/api": "" }, // 把 api 重写掉
    },
  },
  // // 使本地mock数据生效
  // locale: {
  //   enable: true,
  // },
};
