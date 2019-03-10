// 引入项目的数据文件data.json
// nodejs文件引入遵循CommonJS 规范
const data = require('./data.json');
// const video = data.sVideo_Recom


//  sass 依赖 $ npm install sass-loader node-sass --save-dev
//  安装axios $ npm i axios -S
module.exports = {
    configureWebpack: {
        devServer: {
            before(app) {
                app.get('/api/video', function (req, res) {
                    // errno 状态码,真实开发中可以根据状态码
                    // 判断用户当前是否有权限获取数据,或者是是否请求成功,或者是没有数据返回错误原因
                    res.json({data: data, errno: 0});
                });
            },
            proxy: {
                "/data": {
                    target: "https://3g.163.com/touch/nc/api/video/recommend/Video_Recom/0-10.do?callback=videoList",
                    pathRewrite: {"^/data": ""},
                    // changeOrigin: true
                },
                "/toutiao": {
                    target: "http://c.m.163.com/nc/article/headline/T1348647853363/0-40.html",
                    pathRewrite: {"^/toutiao": ""},
                },
                "/jingxuan": {
                    target: "http://c.3g.163.com/nc/article/list/T1467284926140/0-20.html",
                    pathRewrite: {"^/jingxuan": ""},
                },
                "/yule": {
                    target: "http://c.3g.163.com/nc/article/list/T1348648517839/0-20.html ",
                    pathRewrite: {"^/yule": ""},
                },
                "/qiche": {
                    target: "http://c.m.163.com/nc/auto/list/5bmz6aG25bGx/0-20.html ",
                    pathRewrite: {"^/qiche": ""},
                },
                "/zhibo": {
                    target: "http://data.live.126.net/livechannel/previewlist.json ",
                    pathRewrite: {"^/zhibo": ""},
                },
            }
        }
    }
}