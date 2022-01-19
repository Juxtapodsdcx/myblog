
import { Card, Col, Row, Image, PageHeader, Progress, Tabs, Pagination, Skeleton } from 'antd';
import React, { useState, useEffect, useRef } from 'react';
import styles from "./styles.module.less";
// import { QqOutlined, GithubFilled, MailFilled } from '@ant-design/icons'
// import Markdown from "react-markdown"
// import { Layout, Menu } from 'antd';
import { Rate } from 'antd';

const { TabPane } = Tabs;

const Movie = () => {



  const [Mdata, setMdata] = useState([]);
  const [MdataPage, setMdataPage] = useState([]);
  const [type, setType] = useState(1);
  const textInput = useRef([]);

  const [current, setCurrent] = useState(1);
  const pageSize = 10;
  let page = []




  useEffect(() => {

    // fetch("/api/when/").then((res) => res.json()).then((data) => {

    fetch("/api/when/").then((res) => res.json()).then((data) => {

      
      textInput.current.push(data["data"]);
      // console.log( textInput);

    }).then(()=>{
      fetch("/api/douban/").then((res) => res.json()).then((data) => {
        // data2= data["data"];
  
        textInput.current.push(data["data"]);
        // console.log( textInput);
        // console.log( data2);
  
  
      }).then(()=>{
        fetch("/api/me/").then((res) => res.json()).then((data) => {
          // setMdata(data["data"])
          // data3=data["data"];
          textInput.current.push(data["data"]);
          
          // console.log( data3);
    
        }).then(()=>{
          if (type === 1 &&textInput.current) {
            // console.log(textInput.current);
      
            setMdata(textInput.current[0]);
      
          }
          else if (type === 2 &&textInput.current) {
      
            setMdata(textInput.current[1]);
      
          }
          else if (type === 3 &&textInput.current) {
      
            setMdata(textInput.current[2]);
      
          }
        });
      })
  
    })

  }, [])

  useEffect(() => {

    // console.log("type改变了");
    // console.log(type);
    // console.log(textInput.current);

    if (type == 1 &&textInput.current) {
      // console.log(type);
      // console.log(textInput.current[0]);
      setMdata(textInput.current[0]);

    }
    else if (type == 2 &&textInput.current) {
      // console.log(type);

      setMdata(textInput.current[1]);

    }
    else if (type == 3 &&textInput.current) {
      // console.log(type);
      setMdata(textInput.current[2]);
    }


  }, [type])

  useEffect(() => {
    // console.log("Mdata 改变了");
    // console.log(Mdata);
    // console.log(textInput);

    if (Mdata&&Mdata.length != 0) {

      for (let i = (current - 1) * 10; i < pageSize + (current - 1) * 10; i++) {
        page.push(Mdata[i]);
      }
      setMdataPage(page);
    }

  }, [Mdata])

  useEffect(() => {
    // console.log("MdataPage 改变了");
    // console.log(MdataPage);
  }, [MdataPage])

  const onChange = (current) => {

    page = [];
    setCurrent(current);
    // console.log(current);
    for (let i = (current - 1) * 10; i < pageSize + (current - 1) * 10; i++) {
      page.push(Mdata[i]);
    }
    setMdataPage(page);
  }



  const handleClick = (activeKey) => {
    // console.log(activeKey);
    setType(activeKey);
    // if (activeKey === 1) {
    //   setType(1)
    //   console.log(type);

    // } else if (activeKey === 2) {
    //   setType(2)
    //   console.log(type);

    // } else {
    //   setType(3)
    //   console.log(type);
    // }

  }




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
            className={styles.name}
          >

            <div className={styles.name}>
              感觉在我心中中国的片子和国外的片子相同水平的情况下，中国影片普遍比国外低，也可能是我多想了或者欣赏水平有问题？
              相信大家和我一样，看过太多电影了，影评写不过来，所以就把看过的电影按照豆瓣评分筛选了一下，也可能并不会有人看，但还是把他做出来了。

            </div>

          </PageHeader>
        </div>
        <Tabs defaultActiveKey="1" onTabClick={handleClick}>
          <TabPane tab="默认排序" key="1" >
            {/* Content of Tab Pane 1 */}
          </TabPane>
          <TabPane tab="豆瓣评分排序" key="2" >
            {/* Content of Tab Pane 2 */}
          </TabPane>
          <TabPane tab="个人评分排序" key="3">
            {/* Content of Tab Pane 3 */}
          </TabPane>
        </Tabs>




        {!(MdataPage&&MdataPage.length) ? <Skeleton /> : MdataPage.map((data, index) => {
          return (

            <div className={styles.movieList} key={index}>

              <Row style={{ marginTop: 20, marginLeft: 20 }}>
                <a href={data["url"]}>
                  <p className={styles.title}>{data["name"]}</p>
                </a>
              </Row>


              <Row justify="space-around" className={styles.row}>
                <Col sm={3} xs={20} style={{ margin: 20 }}>
                  <Image src={data["imgurl"]}
                  />

                </Col>
                <Col sm={12} xs={24} className={styles.title}>

                  <h1 className={styles.jianjie}>剧情简介</h1>
                  <div className={styles.detail}>
                    {data["jieshao"]}

                  </div>
                  <Row>
                    <h1 className={styles.myrate}>我的评分&nbsp;&nbsp;&nbsp;</h1>

                    <Rate disabled defaultValue={data["myComment"]} />
                  </Row>

                  <Row>

                    <div className={styles.whenIcomment}>
                      评价时间&nbsp;&nbsp;&nbsp;{data["whenIcomment"]}

                    </div>



                  </Row>

                </Col>

                <Col sm={5} xs={0} className={styles.rankAll}>
                  <Row>
                    <h1 className={styles.myrate}>豆瓣评分&nbsp;&nbsp;&nbsp;</h1>

                    <Rate disabled defaultValue={data["allLike"]} />
                  </Row>
                  <Row className={styles.rankProgress}>
                    <Col xl={9} span={24} className={styles.rankFont}>
                      五星占比：&nbsp;&nbsp;&nbsp;
                    </Col >
                    <Col xl={15} span={24}>
                      <Progress percent={parseInt((data["5star"]))} showInfo={false} strokeColor="#87CEFA" />
                    </Col>

                  </Row>

                  <Row className={styles.rankProgress}>

                    <Col xl={9} span={24} className={styles.rankFont}>
                      四星占比：&nbsp;&nbsp;&nbsp;
                    </Col>
                    <Col xl={15} span={24}>
                      <Progress percent={parseInt((data["4star"]))} showInfo={false} strokeColor="#87CEFA" />

                    </Col>


                  </Row>

                  <Row className={styles.rankProgress}>

                    <Col xl={9} span={24} className={styles.rankFont}>
                      三星占比：&nbsp;&nbsp;&nbsp;
                    </Col>
                    <Col xl={15} span={24}>

                      <Progress percent={parseInt((data["3star"]))} showInfo={false} strokeColor="#87CEFA" />

                    </Col>


                  </Row>

                  <Row className={styles.rankProgress}>

                    <Col xl={9} span={24} className={styles.rankFont}>

                      两星占比：&nbsp;&nbsp;&nbsp;
                    </Col>
                    <Col xl={15} span={24}>
                      <Progress percent={parseInt((data["2star"]))} showInfo={false} strokeColor="#87CEFA" />

                    </Col>


                  </Row>

                  <Row className={styles.rankProgress}>

                    <Col xl={9} span={24} className={styles.rankFont}>
                      一星占比：&nbsp;&nbsp;&nbsp;
                    </Col>
                    <Col xl={15} span={24}>
                      <Progress percent={parseInt((data["1star"]))} showInfo={false} strokeColor="#87CEFA" />
                    </Col>


                  </Row>

                  <Row className={styles.rankProgress}>

                    <div className={styles.whenIcomment}>
                      好于：{data["betterThan"]}

                    </div>
                  </Row>
                </Col>


              </Row>

            </div>

          )

        })}

        <div style={{ textAlign: "center" }}>
          <Pagination defaultCurrent={1} total={272} current={current} onChange={onChange} pageSize={10} />

        </div>





      </Card>






    </div >





  )

}

export default Movie
