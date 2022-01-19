
import { Carousel, Card, Divider, Col, Row,  Image} from 'antd';
import React ,{useEffect} from 'react';
import styles from "./styles.module.less";
// import { QqOutlined, GithubFilled, MailFilled } from '@ant-design/icons'
import {Link} from "react-router-dom"








// import { Row,Col,Divider } from 'antd';

const Lunbo = () => {


  const theme = [["wallpaper", "壁纸", "left", 0, "/idol", ["clouds", "sunrise", "stars", "mountains&wind", "moon"]], ["movie", "电影", "top", 50, "/movies", ["哈尔的移动城堡", "未麻的部屋", "千与千寻", "怦然心动", "心灵奇旅"]], ["annimation", "动漫", "left", 100, "/movies", ["斩赤红之瞳", "瑞克和莫蒂", "双城之战", "鬼灭之刃", "Another"]], ["idol", "人物", "top", 0, "/idol", ["Taylor Swift", "Jennie", "Jisoo", "Lisa", "Rose"]]]
  const imgNum = [1, 2, 3, 4, 5]
useEffect(()=>{
  document.title="周周的首页"
},[])


  return (



    <div>



      <Card title="Welcome To zhouzhou's Homepage" bordered={false} >


        {/* <Descriptions.Item label="网页介绍">
          此网站用于安利有意思的番，优质爱豆以及电影推荐，个人向较强，全是精品哦，希望大家看的开心
        </Descriptions.Item> */}
        <Row>
          {theme.map((item, key) => {
            return (
              <Col span={6} key={key} style={{ marginTop: item[3] }}>
                <div className={styles.lunbo}>
                  <Divider className={styles.wenzi} orientation="left" >{item[1]}</Divider>

                  <Carousel autoplay dotPosition={item[2]} style={{ textAlign: 'center', cursor: "pointer" }}>
                    {imgNum.map((item1, key1) => {
                      return (
                        <div key={key1} >
                          <Image
                            className={styles.image}

                            // width="85%"
                            // height="100%"
                            src={'/img/' + item[0] + '/' + item1 + '.jpg'}
                            preview={false}
                            // onClick={window.location.href=item[4]}
                            onClick={() => { window.location.href = item[4] }}
                          />
                          <p className={styles.content}>{item[5][item1 - 1]}</p>

                        </div>

                      )
                    })}

                  </Carousel>




                </div>

              </Col>


            )
          })}








        </Row>
        <div style={{ textAlign: "center" }}>
          <button className={styles.btn}>
            <Link to="/game">
            点击进入博客
            </Link>
            
          </button>
        </div>

      </Card>




      {/* <div className={styles.siteHeader}>
        <PageHeader
          ghost={false}
          // onBack={() => window.history.back()}
          title="首页"
          subTitle="Welcome To zhouzhou's House"
          extra={[


          ]}
        >
          <Descriptions column={3}>

            <Descriptions.Item label="B站"><a target="_blank" href='https://space.bilibili.com/172183887'>UID:172183887</a>

            </Descriptions.Item>
            <Descriptions.Item label="邮箱">  <MailFilled />  1571396031@qq.com</Descriptions.Item>
            <Descriptions.Item label="Github"><a target="_blank" href='https://github.com/ZhouQianruYeah'>    <GithubFilled />  https://github.com/ZhouQianruYeah</a></Descriptions.Item>



          </Descriptions>




          <Descriptions size="small" column={2}>


            <Descriptions.Item >
              此网站立志于安利有意思的番，优质爱豆以及电影推荐，个人向较强，希望大家看的开心
            </Descriptions.Item>



            <Descriptions.Item >
              <button className={styles.btn}>
                点击进入博客
              </button>
            </Descriptions.Item>


          </Descriptions>

          <Descriptions title="">

          </Descriptions>


        </PageHeader>


        <div style={{ textAlign: 'center' }}>
          <button className={styles.btn}>
            点击进入博客
          </button>



        </div>
      </div> */}








    </div>





  )

}

export default Lunbo
