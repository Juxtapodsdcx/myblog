// import React, { useEffect, useState } from 'react'
// import ReactMarkdown from 'react-markdown'
// import ReactDom from 'react-dom'
import { Col, Row, Image, Card, Typography } from "antd"
// import {Link} from "react-router-dom"

import styles from "./styles.module.less"

const { Title } = Typography;



const Pic = (data) => {
    let pic = []
let pic1 = []
let pic2 = []
// const [picState,setstate]=useState([])
// const [picState1,setstate1]=useState([])
// const [picState2,setstate2]=useState([])
    // console.log(data);

    for (let i = 1; i <= data["data"][3]; i+=3) {
        // console.log(i);

        pic.push(
            <Image
            width="100%"
                src={"/img/" + data["data"][0] + "/1 (" + i.toString() + ").jpg"}
            />
    )
    }
    for (let i = 2; i <= data["data"][3]; i+=3) {
        // console.log(i);

        pic1.push(
            <Image
            width="100%"
                src={"/img/" + data["data"][0] + "/1 (" + i.toString() + ").jpg"
            }
            />
    )
    }
    for (let i = 3; i <=data["data"][3]; i+=3) {
        // console.log(i);
        pic2.push(
            <Image
            width="100%"
                src={"/img/" + data["data"][0] + "/1 (" + i.toString() + ").jpg"
            }
            />
    )
    }



// console.log(pic);


    return (
        <div>
         
            <Row justify="space-around">


            <Col span={7}>
             {pic.map((data,index)=>{
                 return(
                     <div key={index} className={styles.picture}>
                         {data}
                         {/* {picState} */}
                     </div>
                 )
             })}
            </Col>
            <Col span={7} style={{marginTop:100}}>
            {pic1.map((data,index)=>{
                 return(
                     <div key={index} className={styles.picture}>
                         {data}
                     </div>
                 )
             })}
            </Col>
            <Col span={7} style={{marginTop:40}}>

            {pic2.map((data,index)=>{
                 return(
                     <div key={index} className={styles.picture}>
                         {data}
                     </div>
                 )
             })}

            </Col>


</Row>

<Row >
                    <Col span={12} >
                        <div style={{textAlign:"center"}}>
                        <a className={styles.button} href={"https://baike.baidu.com/item/"+data["data"][0]} target="_blank" rel="noopener">See more info</a>

                        </div>

                    </Col>
                    <Col span={12} >
                    <div style={{textAlign:"center"}}>

                    <a className={styles.button} href={"https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&sf=1&fmq=&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&fm=index&pos=history&word="+data["data"][0]} >See more picture</a>
                    </div>

                    </Col>
                </Row>

  
        </div>
    )

}

const Picture = (data) => {



    // console.log(data["data"]);

    return (

        <div>
            <Card title="">
                <Title level={2} style={{ margin: "30px", marginTop: 15 }} className={styles.title}>
                    {data["data"][0]}
                </Title>


                <Row justify="space-around">
                <Pic data={data["data"]}></Pic>
                </Row>

                {/* <div style={{ textAlign: "center" }}> */}
           
                                      

                                    {/* </div> */}


            </Card>


        </div>









    )

}



export default Picture;