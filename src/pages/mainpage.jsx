
import { Carousel ,Card} from 'antd';
import React from 'react';
// import  styles from "./styles.css";
import  styles from "./styles.less";
// import "./styles.less";


// import 'antd/dist/antd.css';

// import { Row,Col,Divider } from 'antd';

 const Lunbo =()=>{
 
  const contentStyle = {
    height: '160px',
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
       {/* <div className={styles.hei}> 
    cccc
       </div> */}
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
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
