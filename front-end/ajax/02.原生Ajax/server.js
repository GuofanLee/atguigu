//1、引入express
const express = require('express');

//2、创建应用对象
const app = express();

//3、创建GET请求路由规则，request是对请求报文的封装，response是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应
    response.send('Hello Ajax GET');
});

//4、创建所有请求（POST、GET、OPTIONS等）路由规则，request是对请求报文的封装，response是对响应报文的封装
app.all('/server', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应头，允许任意请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应
    response.send('Hello Ajax POST');
});

//响应Json数据
app.get('/json-server', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应
    const data = {
        name: 'guofanlee'
    };
    //响应数据只能是字符串或Buffer，json对象会转为字符串
    response.send(data);
});

//测试IE缓存
app.get('/ie', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应
    response.send('Hello IE');
});

//5、监听端口&启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中......');
});