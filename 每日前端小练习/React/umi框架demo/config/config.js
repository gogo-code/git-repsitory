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
  },
  // // 使本地mock数据生效
  // locale: {
  //   enable: true,
  // },
};
