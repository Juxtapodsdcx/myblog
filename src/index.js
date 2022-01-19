import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Routes, Route, BrowserRouter } from "react-router-dom"
import Mainpage from "./pages/mainpage/mainpage"
import Game from "./pages/gameRecommand/game"
// import About from "./pages/about/about"
import styles from "./styles.module.less"
import Idol from "./pages/idols/idol"
import Movie from "./pages/movieRecomand/movie"
import { EllipsisOutlined,MailFilled,YoutubeOutlined,GithubFilled} from "@ant-design/icons"
import { Popover } from 'antd';

// import Routers from './pages/routerConfig';
// import { Button, Descriptions } from 'antd';

import { Layout, Menu, Row, Col,Divider } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

// const ReactMarkdown = require('react-markdown')
// console.log(Tuili);





const content = (
  <div>
    {/* <Col span={8} className={styles.header}> */}
    <p styles={{marginTop:20}}>
    此网站立志于安利有意思的番🎨，爱豆以及电影推荐🎬，个人向较强，希望大家看的开心❤

    </p>

    <Divider />

 
       {/* <Row> */}
          <div style={{textAlign:"right"}} >
            <div style={{display:'inline-block'}}>
            {/* textAlign:"right", */}
            
            </div>
            <div style={{display:'inline-block'}}>
            <a target="_blank" rel="noopener" href='https://space.bilibili.com/172183887' ><YoutubeOutlined className={styles.icon}/></a>
<a target="_blank" rel="noopener" href='mailto:1571396031@qq.com' rel="noopener">
<MailFilled className={styles.icon}/> 
</a>
<a target="_blank"  rel="noopener" href='https://github.com/ZhouQianruYeah'>    <GithubFilled className={styles.icon}/></a>

            </div>



</div>

       {/* </Row> */}
      


  
  </div>
);







ReactDOM.render(
  <>
    <BrowserRouter>
      <Layout>

        <Header className={styles.header}>

          <Row justify='space-around'>

            <Col span={22}>
              <Menu mode="horizontal" defaultSelectedKeys={['1']}>

                <Menu.Item key="1">
                  <Link to="/mainpage">首页</Link>

                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/game">游戏推荐</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/movies">电影推荐</Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/idol">安利人物推荐</Link>
                </Menu.Item>
                {/* <Menu.Item key="6">
                  <Link to="/about">关于</Link></Menu.Item> */}

              </Menu>

            </Col>
            <Col span={2}>
              <Popover placement="bottomRight" content={content} trigger="hover" className={styles.popover}>
                {/* <Button>Hover me</Button> */}
                {/* <DownOutlined /> */}
                <EllipsisOutlined style={{ fontSize: 20, marginTop: 23 }} />
              </Popover>
            </Col>



          </Row>

          <div>


          </div>

        </Header>



        <Content className={styles.content}>

          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>

            <Content style={{ padding: '0 24px', minHeight: 280 }}>

              <Routes>
                <Route path="/" element={<Mainpage />} />
                <Route path="/Mainpage" element={<Mainpage />} />
                <Route path="/game/*" element={<Game />} />

                <Route path="/movies" element={<Movie />} />

                <Route path="/idol/*" element={<Idol />} />
                {/* <Route path="/about" element={<About />} /> */}
                


              </Routes>


            </Content>
          </Layout>
        </Content>






        <Footer style={{ textAlign: 'center' }}>2021 Created by ZhouZhou233</Footer>
      </Layout>
    </BrowserRouter>

  </>


  ,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();






