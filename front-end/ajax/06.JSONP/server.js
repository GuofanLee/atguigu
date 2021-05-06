//1、引入express
const express = require('express');

//2、创建应用对象
const app = express();

//3、创建请求路由规则，request是对请求报文的封装，response是对响应报文的封装
app.all('/jsonp-server', (request, response) => {
    const data = {name: '尚硅谷'};
    //响应结果是对一个JS方法调用，并传入参数，这个参数就是我们要返回给前端的数据
    response.send(`handle(${JSON.stringify(data)})`);
});

//JS原生JSONP
app.all('/getResult', (request, response) => {
    //获取响应回调方法名称
    let callbackFunctionName = request.query.callback;
    const data = {name: '尚硅谷', age: 18};
    //响应结果是对一个JS方法调用，方法名称从url请求参数获取，方法入参就是要返回给前端的数据
    response.send(`${callbackFunctionName}(${JSON.stringify(data)})`);
});

//5、监听端口&启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中......');
});