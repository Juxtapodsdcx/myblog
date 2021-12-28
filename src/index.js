import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';


import { Button } from 'antd';
import styles from "./App.css"

// import Lunbo from "./pages/mainpage"

ReactDOM.render(
    // <Lunbo />
    <>
    <div className={styles.color}>
      xxx
    </div>

    <Button type={styles.primary}>Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
    </>
,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



