// import 'antd/dist/antd.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Link,Routes,Route,BrowserRouter} from "react-router-dom"
// import Mainpage from "./pages/mainpage/mainpage"
// import Game from "./pages/gameRecommand/game"
// import About from "./pages/about/about"
// import styles from "./styles.module.less"

// // import Routers from './pages/routerConfig';
// import { Button,Descriptions } from 'antd';

// import { Layout, Menu, Breadcrumb,Row,Col } from 'antd';
// // import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;
// const { Header, Content, Footer, Sider } = Layout;

// const ReactMarkdown = require('react-markdown')



// ReactDOM.render(
// //     <>
// // <BrowserRouter>
// //   <Layout>
   
// //     <Header  style={{ paddingLeft: 50  ,background:"white" }}> 
   
// //       <Row>

// // <Col span={14}>
// // <Menu mode="horizontal" defaultSelectedKeys={['1']}>
   
// //    <Menu.Item key="1">
// //    <Link to="/mainpage">首页</Link>

// //    </Menu.Item>
// //    <Menu.Item key="2">
// //    <Link to="/game">游戏推荐</Link>
// //      </Menu.Item>
// //    <Menu.Item key="3">
// //    <Link to="/mainpage">电影推荐</Link>
// //      </Menu.Item>
// //    <Menu.Item key="4">
// //    <Link to="/mainpage">动漫推荐</Link>
// //      </Menu.Item>
// //    <Menu.Item key="5">
// //    <Link to="/mainpage">安利人物推荐</Link>
// //      </Menu.Item>
// //    <Menu.Item key="6">
// //    <Link to="/about">关于</Link></Menu.Item>





  
 
// //  </Menu>

// // </Col>


// // <Col span={10}>
// // 此网站立志于安利有意思的番🎨，爱豆以及电影推荐🎬，个人向较强，希望大家看的开心❤
// // </Col>
// //       </Row>
// //     {/* className="header" */}
// //       {/* <div className="logo" /> */}
     
   
      

// //       {/* <Descriptions.Item >
// //         此网站立志于安利有意思的番，优质爱豆以及电影推荐，个人向较强，希望大家看的开心
// //         </Descriptions.Item> */}
// //     </Header>
    

   
// //     <Content  style={{ padding: '0 50px' }}>
// //       <div></div>
// //       {/* <Breadcrumb style={{ margin: '16px 0' }}>
// //         <Breadcrumb.Item>Home</Breadcrumb.Item>
// //         <Breadcrumb.Item>List</Breadcrumb.Item>
// //         <Breadcrumb.Item>App</Breadcrumb.Item>
// //       </Breadcrumb> */}
// //       <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
      
// //         <Content style={{ padding: '0 24px', minHeight: 280 }}>
       
// //          <Routes>
// //             <Route path="/" element={<Mainpage />} />
// //             <Route path="/Mainpage" element={<Mainpage />} />
// //             <Route path="/game" element={<Game />} />




// //             <Route path="/about" element={<About />} />

    
// //           </Routes>
       
    
// //           {/* <Mainpage /> */}
          
        
          
          
          
          
// //           </Content>
// //       </Layout>
// //     </Content>











// //     <Footer style={{ textAlign: 'center' }}>2021 Created by ZhouZhou233</Footer>
// //   </Layout>
// //   </BrowserRouter>

// //     </>


// <ReactMarkdown  source={input}>
// </ReactMarkdown>
// ,
//   document.getElementById('root')
// );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();



import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import md from "./md.md"



// const input = '# This is a header\n\nAnd this is a paragraph'
ReactDom.render(<ReactMarkdown children={md}></ReactMarkdown>, document.getElementById('root'))


