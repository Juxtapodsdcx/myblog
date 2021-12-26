
import { Carousel } from 'antd';
import React from 'react';
import  styles from "./styles.css";

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
  
  // console.log(styles);
  return (
    <div>
 
      {/* dotPosition="left" */}
      <Carousel autoplay >
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
