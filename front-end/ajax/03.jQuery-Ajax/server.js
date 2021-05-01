//1、引入express
const express = require('express');

//2、创建应用对象
const app = express();

//3、创建请求路由规则，request是对请求报文的封装，response是对响应报文的封装
app.all('/jquery-server', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    const data = {name: '尚硅谷'};
    //设置响应
    response.send(data);
});

//测试网络超时
app.all('/jquery-timeout', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应头，允许任意请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {name: '尚硅谷'};
    //3s后响应结果
    setTimeout(() => {
        //设置响应
        response.send(data);
    }, 1000);
});

//5、监听端口&启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中......');
});