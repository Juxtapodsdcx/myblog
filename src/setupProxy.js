// import {proxy} from "http-proxy-middleware"
// const proxy=require("http-proxy-middleware");

// module.exports=function(app){
//     app.use(
//         proxy("/api",{
//             target:" http://127.0.0.1:8000",
//             changeOrigin:ture
//         })
//     );
//     // app.listen(3000);
// };

const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy.createProxyMiddleware('/api', {    // 'qwl'  需要转发的请求
    target: 'http://127.0.0.1:8000',  //接口服务器地址
    // target: 'http://192.168.9.116:8080',
    // target: 'http://192.168.9.17:8080', 
    // target: 'http://192.168.9.19:8080', 
    changeOrigin: true,
    // pathRewrite: {
    //     '/api': ''
    // },
  }));
};
