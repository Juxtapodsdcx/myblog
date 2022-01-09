
import { Card, Divider, Col, Row, Descriptions, Steps, Image, Carousel, Slider, PageHeader, Statistic, Progress } from 'antd';
import React, { useState, useEffect } from 'react';
import styles from "./styles.module.less";
// import { QqOutlined, GithubFilled, MailFilled } from '@ant-design/icons'
import Markdown from "react-markdown"
import { Layout, Menu, Breadcrumb } from 'antd';
import { Rate } from 'antd';

// import { RedditOutlined, CrownOutlined, SmileOutlined } from '@ant-design/icons';

import ReactMarkdown from 'react-markdown';

const { Step } = Steps;

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;



const Game = () => {
  const data = {
    'name': '无耻之徒(美版) 第十一季 Shameless Season 11',
    'nameE': 'Shameless',
    'whenIcomment': '2020-12-18',
    'imgurl': 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2684220778.jpg',
    'url': 'https://movie.douban.com/subject/34948243/',
    'jieshao': '历经了千年的繁华，巍峨帝都早已从内部腐烂，拥有邪魔灵魂的统治者，正引领文明走向毁灭。为了解除村庄的困境，拥有绝赞剑术的少年塔兹米（齐藤壮马 配音）独闯帝都。此时帝都至高无上的皇帝还只是不谙世事的孩子，国家的实际操纵者大臣只手遮天，是帝都腐朽的根源。历经一波三折，塔兹米被曾经骗过自己的雷欧奈（浅川悠 配音）强行拉入一个神秘组织Night Raid。Night Raid是一支令帝都所有权贵富贾闻风丧胆的暗杀集团，他们是革命军下辖的秘密特殊部队，其最终目标是颠覆大臣的统治。在娜杰塔（水野理纱 配音）的领导下，赤瞳（雨宫天 配音）、雷欧奈等绝世高手云集其下。塔兹米的命运由此发生转折，而接二连三更大的纷争则将其引向未知的彼方……\n本片根据タカヒロ（原作）、田代哲也（原画）的漫画改编。',
    '1star': '0.6%',
    '2star': '0.3%',
    '3star': '2.4%',
    '4star': '10.9%',
    '5star': '85.9%',
    'allLike': '9.6',
    'betterThan': '73% 爱情片',
    'myComment': '5'
  }
  // console.log(styles);
  // fetch("https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2684220778.jpg").then((data)=>{
  //   console.log(data);
  // })


  // 100: {
  //   style: {
  //     color: 'black',
  //   },
  // label: <strong>豆瓣评分</strong>,


  // console.log(parseInt((data["5star"])));



  return (

    <div>

<Card title="影视推荐" bordered={false}>

      <div className={styles.siteHeader}>
        <PageHeader
          ghost={false}
          // onBack={() => window.history.back()}
            // title="欢迎大家查看电影推荐🤗"
            subTitle=" 欢迎大家查看电影推荐🤗"
          extra={[
          ]}
        >

          <Row>
            {/* <Statistic title="欢迎大家查看电影推荐🤗" value="欢迎大家查看电影推荐哦🤗" /> */}
           
          </Row>




          <Descriptions size="small" column={2}>


            <Descriptions.Item >
              感觉在我心中中国的片子和国外的片子相同水平的情况下，中国影片普遍比国外低，也可能是我多想了或者欣赏水平有问题？

              相信大家和我一样，看过太多电影了，影评写不过来，所以就把看过的电影按照豆瓣评分筛选了一下，也可能并不会有人看，但还是把他做出来了。



            </Descriptions.Item>





          </Descriptions>





        </PageHeader>


      </div>


    


        <div className={styles.movieList}>

          <Row style={{ marginTop: 20, marginLeft: 20 }}>
            <a href={data["url"]}>
              <p style={{ fontSize: 20 }}>{data["name"]}</p>
            </a>
            {/* <div style={{ marginLeft: 50 }}>
              </div> */}

          </Row>
          <Row style={{ marginLeft: 25, marginRight: 25 }}>
            <Col span={3} style={{ margin: 20 }}>
              <Image src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2684220778.jpg"
              />




            </Col>
            <Col span={12} style={{ margin: 20 }}>




              {/* <Descriptions size="small" column={2}>
             <Descriptions.Item label="剧情简介">
              
               </Descriptions.Item>
           </ Descriptions> */}
              <h1 className={styles.jianjie}>剧情简介</h1>
              {data["jieshao"]}
              <Row>
                <h1 className={styles.myrate}>我的评分&nbsp;&nbsp;&nbsp;</h1>
                {/* {data["myComment"]} */}
                <Rate disabled defaultValue={data["myComment"]} />
              </Row>

              <Row>
                {/* <h1  className={styles.myrate}></h1> */}
                <div className={styles.whenIcomment}>
                  评价时间&nbsp;&nbsp;&nbsp;{data["whenIcomment"]}

                </div>



              </Row>






            </Col>

            <Col span={5} className={styles.rankAll}>
              <Row className={styles.rankProgress}>
                五星占比：&nbsp;&nbsp;&nbsp;
                <Col span={15}>
                  <Progress percent={parseInt((data["5star"]))} showInfo={false} strokeColor="#87CEFA" />
                  {/* <Slider marks={marks} defaultValue={parseInt((data["5star"]))} max={100} /> */}
                </Col>


              </Row>

              <Row className={styles.rankProgress}>
                四星占比：&nbsp;&nbsp;&nbsp;
                <Col span={15}>
                  <Progress percent={parseInt((data["4star"]))} showInfo={false} />

                  {/* <Slider marks={marks} defaultValue={parseInt((data["4star"]))} max={100} /> */}
                </Col>


              </Row>

              <Row className={styles.rankProgress}>
                三星占比：&nbsp;&nbsp;&nbsp;
                <Col span={15}>
                  <Progress percent={parseInt((data["3star"]))} showInfo={false} />

                  {/* <Slider marks={marks} defaultValue={parseInt((data["3star"]))} max={100} /> */}
                </Col>


              </Row>

              <Row className={styles.rankProgress}>
                两星占比：&nbsp;&nbsp;&nbsp;
                <Col span={15}>
                  <Progress percent={parseInt((data["2star"]))} showInfo={false} />

                  {/* <Slider marks={marks} defaultValue={parseInt((data["2star"]))} max={100} /> */}
                </Col>


              </Row>

              <Row className={styles.rankProgress}>
                一星占比：&nbsp;&nbsp;&nbsp;
                <Col span={15}>
                  <Progress percent={parseInt((data["1star"]))} showInfo={false} />
                  {/* <Slider marks={marks} defaultValue={parseInt((data["1star"]))} max={100} /> */}
                </Col>


              </Row>

              <Row className={styles.rankProgress}>

                <div className={styles.whenIcomment}>
                  好于：{data["betterThan"]}

                </div>


              </Row>
              <Row>
                <h1 className={styles.myrate}>豆瓣评分&nbsp;&nbsp;&nbsp;</h1>
                {/* {data["myComment"]} */}
                <Rate disabled defaultValue={data["allLike"]} />
              </Row>





            </Col>









          </Row>

        </div>


      </Card>






    </div >





  )

}

export default Game
