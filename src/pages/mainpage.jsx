
import { Carousel } from 'antd';
import React from 'react';
import  styles from "./styles.less";

import { Row,Col,Divider } from 'antd';

 const Lunbo =()=>{
  const contentStyle = {
    height: '1600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  // const hei = {
  //   color: "red"
  // }
  
  return (
    <div>
      <h1 className={styles.hei}>xxxx</h1>
      {/* dotPosition="left" */}
      <Carousel autoplay className={styles.Lunbo1}>
        <div>
          <h3 className={contentStyle}>内容</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    
     

    

    </div>
     
 
    
     
    )
  
}

export default Lunbo
