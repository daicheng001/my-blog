---
   title: "使用webpack+antd+react搭建后台管理系统"
   description: "使用webpack以及antd中的pro table插件搭建后台管理系统"
   date: "2021-04-27"
   type: "javaScript"
   img: "https://fyh2016cjcj.oss-cn-hangzhou.aliyuncs.com/mall/_rc-upload-1621316084709-30"
---
```javascript
使用webpack以及antd中的pro table插件搭建后台管理系统
```

### webpack一般配置

- 不同环境配置打包： corss-env配置环境变量NODE_ENV
- 配置sourmap：cheap-module-source-map：没有列映射

   source-map：生产环境是配置选项，速度最快 

- 配置css文件分离：mini-css-extract-plugin
- 生成资产清单文件：webpack-manifest-plugin



### 项目文件配置

- 1.public：公共资源文件
- 2.src下的文件夹：
   - 1.api：所有后台接口
   - 2.components：所有的公共组件
   - 3.utils：工具函数
   - 4.pages：页面组件
   - 5.如果使用redux等则还有stores、reducer文件夹
   - 6.proxy文件：配置代理的文件，进行跨域请求
   - 7.request.js文件等内容



### 项目的路由配置

- 1.react项目中有login页面以及登录之后的页面

  ```javascript
  src/app.js
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
  import { Provider } from 'react-redux';
  import store from './store'
  import Login from './pages/login'
  import Comment from './pages/comment'
  import './App.css';
  
  function App() {
    return (
      <Provider store={store}>
        <Router basename="/fe-mall-dealer">
          <Switch>
            <Route path="/login" component={Login} exact/>
            <Route path="/" render={()=>
                localStorage.getItem("mscode_token")?<Comment/>:<Redirect to="/login"/>
            } />
          </Switch> 
        </Router>
      </Provider>
    );
  }
  ```

  

- 2.其他的页面在comment组件中设置，comment组件中通过layout组件封装全局头部组件以及全局的侧边栏组件

  ```javascript
  src/route.js
  import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
  import Layout from "../layout";
  import Home from "./index";
  import Product from "./products";
  import OrderManagement from "./order";
  import Logistics from "./Logistics";
  import OrderDetail from "./order/detail";
  import ProductDetail from "./products/detail.jsx";
  
  const All = () => {
    return (
      <Layout>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/productList" component={Product} exact />
          <Route path="/productDetail" component={ProductDetail} exact />
          <Route path="/orderManagement" component={OrderManagement} exact />
          <Route path="/orderDetail" component={OrderDetail} exact />
          <Route path="/logisticsConfig" component={Logistics} exact />
        </Switch>
      </Layout>
    );
  };
  
  export default All;
  ```

  

- 3.在comment组件中内容部分则是通过二级路由进行匹配，这样就实现了点击侧边栏切换中间的内容



### 项目中的登录页面

- 1.通过antd中的form表单进行表单的配置以及校验
- 2.进入login页面时获取图片验证码信息，开始输入用户名以及密码
- 3.如果通过表单校验，此时获取通过Form表单中的方法获取所有的form表单的值，此时发送请求验证验证码是否正确
- 4.如果验证码正确则发送登录请求，登录请求成功则登录首页并且在localstorage中存储token值，失败则重新刷新页面并且重新刷新图片验证码
- 5.如果验证码错误则重新刷新页面输入表单信息，并且刷新图片验证码



### 搭建页面

- 1.通过ant-design/pro-table插件可以快速的生成表格
- 2.protable配置项：通过columns配置表单中需要展示的数据以及搜索项目、通过request请求数据，如果request的第一个参数params发生改变，则此时数据发生改变，分页通过params中的current以及pageSize两个属性进行配置
- 3.如果首次请求需要手动触发（如进入页面需要获取参数再传递参数给后台再渲染数据），需配置manualRequest
- 4.重新渲染页面以及重置页面则通过actionRef配置ref。通过ref.current.reloadAndReset()方法
- 5注意事项：在columns中只能获取当前行的数据
