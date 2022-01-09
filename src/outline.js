import 'antd/dist/antd.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import {Link,Routes,Route,BrowserRouter} from "react-router-dom"
import Mainpage from "./pages/mainpage/mainpage"
// import Routers from './pages/routerConfig';
import { Button } from 'antd';
// import styles from "./App.css"

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const outline=()=>{
    return (
        <>
        <BrowserRouter>
          <Layout>
            <Header className="header">
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                <Link to="/mainpage">首页</Link>
        
                </Menu.Item>
                <Menu.Item key="2">
                <Link to="/mainpage">游戏推荐</Link>
                  </Menu.Item>
                <Menu.Item key="3">
                <Link to="/mainpage">电影推荐</Link>
                  </Menu.Item>
                <Menu.Item key="4">
                <Link to="/mainpage">动漫推荐</Link>
                  </Menu.Item>
                <Menu.Item key="5">
                <Link to="/mainpage">安利人物推荐</Link>
                  </Menu.Item>
                <Menu.Item key="6">
                <Link to="/mainpage">关于</Link></Menu.Item>
              
              </Menu>
            </Header>
            
            <Content style={{ padding: '0 50px' }}>
              <div></div>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb> */}
              <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                <Sider className="site-layout-background" width={200}>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                  >
                    <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                      <Menu.Item key="1">option1</Menu.Item>
                      <Menu.Item key="2">option2</Menu.Item>
                      <Menu.Item key="3">option3</Menu.Item>
                      <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                      <Menu.Item key="5">option5</Menu.Item>
                      <Menu.Item key="6">option6</Menu.Item>
                      <Menu.Item key="7">option7</Menu.Item>
                      <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                      <Menu.Item key="9">option9</Menu.Item>
                      <Menu.Item key="10">option10</Menu.Item>
                      <Menu.Item key="11">option11</Menu.Item>
                      <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
               
                 <Routes>
                    <Route path="/" element={<Mainpage />} />
            
                  </Routes>
               
            
                  {/* <Mainpage /> */}
                  
                  Content
                  
                  
                  
                  
                  </Content>
              </Layout>
            </Content>
        
        
        
        
        
        
        
        
        
        
        
            <Footer style={{ textAlign: 'center' }}>2021 Created by ZhouZhou233</Footer>
          </Layout>
          </BrowserRouter>
        
            </>
    )
}

export default outline;
 


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



