# cnblogs-vue

博客园vue版第三方客户端  
注：因为没有申请到博客园官方的api权限，所以系统没有用户体系，无法评论、点赞等等
感谢[@jackhutu](https://github.com/jackhutu)大神，他的作品[jackblog-vue](https://github.com/jackhutu/jackblog-vue)让我学到很多东西
## 使用方法
```
npm install
webpack
node app.js
```
在浏览器访问 http://localhost:8080   
按F12 模拟手机访问或者在手机端访问体验最好

## 运行截图
![sample_img](http://ol1u7lofv.bkt.clouddn.com/4.jpg)

### 目录结构
```
.
├── api                         //跨域请求接口
├── bin                         //express生成目录
├── public                      //项目静态文件目录
├── routes                      //express生成路由目录
├── views                       //页面
|   ├── api                     //页面请求
|   ├── components              //vue组件
|   ├── store                   //vuex
|   ├── main.js                 //入口文件
├── _config.yml                 //jekyll-theme
├── .gitignore                  //git忽略文件
├── app.js                      //node启动文件
├── LICENSE                     //MIT开源License
├── package.json                
├── process.json                //pm2启动文件
├── READEME.json                
├── webpack.config.js           //webpack配置文件
├── webrouter.js                //express路由
.
```

## 技术栈
http服务器、跨域方案[NodeJs](https://nodejs.org/en/)   
前端模块化方案[webpack](https://github.com/webpack/webpack)   
Web前端框架[vue.js 2.0](https://github.com/vuejs/vue)   
前端路由[vue-router](https://github.com/vuejs/vue-router)   
状态管理[vuex](https://github.com/vuejs/vuex)   
UI框架[MUI](https://github.com/dcloudio/mui)   
CSS预编译方案[stylus](https://github.com/stylus/stylus)   
ES6

## License
MIT