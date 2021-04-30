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

//5、监听端口&启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中......');
});