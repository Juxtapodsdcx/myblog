
import { Card, Divider, Col, Row, Descriptions, Steps, Image, Carousel, PageHeader, Statistic, Skeleton } from 'antd';
import React, { useState, useEffect } from 'react';
import styles from "./styles.module.less";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom"
// import { QqOutlined, GithubFilled, MailFilled } from '@ant-design/icons'
import Markdown from "react-markdown"
import { Layout, Menu, Breadcrumb } from 'antd';
// import { RedditOutlined, CrownOutlined, SmileOutlined } from '@ant-design/icons';
import tuiliSrc from "./tuili.md"
import yuleSrc from "./yule.md"
import zhiyuSrc from "./zhiyu.md"
import ReactMarkdown from 'react-markdown';
import { Typography } from 'antd';



const { Title } = Typography;

const { Step } = Steps;

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
// const mdAll="推理解密"




const Tuili=()=>{
  const [tuili, setTuili] = useState("")
  useEffect(() => {
    // setMd
    fetch(tuiliSrc).then((res) => res.text()).then((text) => {
      setTuili(text)
      // console.log(tuili);
    })

  }, [])

  return(
    <Row>
  <Col md={8} xs={0} className={styles.Carousel}>

      <div>
        <div>
        <Carousel autoplay className={styles.Carousel}>
          <div>
            <Image
              src="/img/Game/dark.jpg"
              className={styles.image}
             
      
            />
          </div>
          <div>
            <Image
              src="/img/Game/dark1.jpg"
              className={styles.image}
          
           
            />
          </div>

        </Carousel>
        <div style={{ textAlign: "center" }}>
          <Title level={5}>黑暗沼泽庄园</Title>
        </div>
        </div>
   

        <div>
        <Carousel autoplay className={styles.Carousel}>
          <div>
            <Image
              src="/img/Game/xiuhu1.webp"
              className={styles.image}

            />
          </div>
          <div>
            <Image
              src="/img/Game/xiuhu2.webp"
              className={styles.image}

            />
          </div>
          <div>
            <Image
              src="/img/Game/xiuhu3.webp"
              className={styles.image}

            />
          </div>
          <div>
            <Image
              src="/img/Game/xiuhu4.webp"
              className={styles.image}


            />
          </div>
          <div>
            <Image
              src="/img/Game/xiuhu5.webp"
              className={styles.image}

            />
          </div>

        </Carousel>
        <div style={{ textAlign: "center" }}>
          <Title level={5}>锈湖/逃离方块</Title>
        </div>
        </div>


        <div>
        <Carousel autoplay className={styles.Carousel}>
          <div>
            <Image
              src="/img/Game/huazhong.png"
              className={styles.image}

            />
          </div>
          <div>
            <Image
              src="/img/Game/huazhong1.webp"
              className={styles.image}

            />
          </div>
          <div>
            <Image
              src="/img/Game/huazhong2.jpg"
              className={styles.image}

            />
          </div>
 

        </Carousel>
        <div style={{ textAlign: "center" }}>
          <Title level={5}>画中世界</Title>
        </div>
        </div>








      </div>




    </Col>


    {/* <Divider orientation="left">Left Text</Divider> */}
    <Col md={16} xs={24} style={{ padding: 30 }}>
      {tuili ? <ReactMarkdown children={tuili} /> : <Skeleton active />}
      {/* { yule?<ReactMarkdown children={yule} />:<div>loading</div>}
    { zhiyu?<ReactMarkdown children={zhiyu} />:<div>loading</div>} */}





    </Col>
  </Row>
  )

}


const Yule=()=>{
 
  const [yule, setYule] = useState("")
  useEffect(() => {
    // setMd
    fetch(yuleSrc).then((res) => res.text()).then((text) => {
      setYule(text)
      // console.log(yule);
    })

  }, [])

  return(
    <Row>
    <Col md={8} xs={0} className={styles.Carousel}>

      <div>
        <div>
        <Carousel autoplay className={styles.Carousel}>
          <div>
            <Image
              src="/img/Game/1.webp"
              className={styles.image}

            />
          </div>
          <div>
            <Image
              src="/img/Game/2.jpg"
              className={styles.image}

            />
          </div>
          <div>
            <Image
              src="/img/Game/3.webp"
              className={styles.image}

            />
          </div>
          <div>
            <Image
              src="/img/Game/4.webp"
              className={styles.image}

            />
          </div>

        </Carousel>
        <div style={{ textAlign: "center" }}>
          <Title level={5}>王者荣耀</Title>
        </div>
        </div>
   

        


        <div>
        <Carousel autoplay className={styles.Carousel}>
          <div>
            <Image
              src="/img/Game/feiche.webp"
              className={styles.image}

            />
          </div>
   
 

        </Carousel>
        <div style={{ textAlign: "center" }}>
          <Title level={5}>QQ飞车</Title>
        </div>
        </div>








      </div>




    </Col>


    {/* <Divider orientation="left">Left Text</Divider> */}
    <Col md={16} xs={24} style={{ padding: 30 }}>
      {/* {tuili ? <ReactMarkdown children={tuili} /> : <Skeleton active />} */}
      { yule?<ReactMarkdown children={yule} />:<div>loading</div>}
    {/* { zhiyu?<ReactMarkdown children={zhiyu} />:<div>loading</div>} */}





    </Col>
  </Row>
  )

}

const Zhiyu=()=>{
  const [zhiyu, setZhiyu] = useState("")
  useEffect(() => {
    // setMd
    fetch(zhiyuSrc).then((res) => res.text()).then((text) => {
      setZhiyu(text)
      // console.log(zhiyu);
    })

  }, [])
    

  return(
    <Row>
    <Col md={8} xs={0} className={styles.Carousel} >

      <div>
        <div>
        <Carousel autoplay className={styles.Carousel}>
          <div>
            <Image
              src="/img/Game/zhiyu.webp"
              className={styles.image}

            />
          </div>
          <div>
            <Image
              src="/img/Game/zhiyu1.webp"
              className={styles.image}

            />
          </div>
          <div>
            <Image
              src="/img/Game/zhiyu2.webp"
              className={styles.image}

            />
          </div>
          <div>
            <Image
              src="/img/Game/zhiyu3.webp"
              className={styles.image}

            />
          </div>

        </Carousel>
      
        </div>
   



      </div>

    </Col>


    {/* <Divider orientation="left">Left Text</Divider> */}
    <Col md={16} xs={24} style={{ padding: 30 }}>
      {/* {tuili ? <ReactMarkdown children={tuili} /> : <Skeleton active />} */}
      {/* { yule?<ReactMarkdown children={yule} />:<div>loading</div>} */}
    { zhiyu?<ReactMarkdown children={zhiyu} />:<div>loading</div>}





    </Col>
  </Row>
  )

}

const Game = () => {
useEffect(()=>{
  document.title="游戏推荐"
})



  return (
    <div>
  <Card title="游戏推荐" bordered={false}>


      <div className={styles.siteHeader}>
        <PageHeader
          ghost={false}
          // onBack={() => window.history.back()}
            // title="游戏"
          subTitle=" 欢迎大家查看游戏推荐🤩"

          extra={[
          ]}
        >


          <Descriptions size="small" column={2}>


            <Descriptions.Item >
              老游戏玩家了，又菜又爱玩说的正是老夫啦，哈哈哈哈哈，推荐的游戏绝对精品，入坑不亏。

              对了，推荐一个app：应用汇（强推❤❤❤❤❤ ）很多游戏在这个app上几乎都能下载到，而且这里面很多游戏都不要钱（白嫖党的快乐）
            </Descriptions.Item>

          </Descriptions>


        </PageHeader>

      </div>



  
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>

          <Menu.Item key="1">
            <Link to="/game/tuili">推理解密</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/game/yule">休闲娱乐</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/game/zhiyu">治愈游戏</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/game/other">其他</Link>
          </Menu.Item>


        </Menu>

     <Routes>
     <Route path="/" element={<Tuili></Tuili>}></Route>
     <Route path="/tuili" element={<Tuili></Tuili>}></Route>
     <Route path="/yule" element={<Yule></Yule>}></Route>

     <Route path="/zhiyu" element={<Zhiyu></Zhiyu>}></Route>

     </Routes>  
       
      </Card > 


    </div >



  )

}

export default Game;

