// import { Accordion, List } from 'antd-mobile';
import React from 'react';
// import $ from 'jquery';

import Immutable from 'immutable';
import styles from './index.less'
class AccordionExmple extends React.Component {
    onChange = (key) => {
        console.log(key);
    }
    componentDidMount() {
       let map1 = Immutable.Map({a:1,b:1,c:1});
       let map2 = Immutable.Map({a:1,b:1,c:1});
       console.log(map1===map2);
       setTimeout(()=>{
           console.log("setTimeout");
       })
       let promise = new Promise(function(resolve, reject) {
        // console.log('Promise');
        resolve();
      });
      
      promise.then(function() {
        console.log('resolved.');
      });
    }

    handleClick = ()=>{

    }
    render() {
        // const imgUrl = process.env.REACT_APP_DEVELOP+"/bannock/file/download?f=202010191709492355229580.jpg"
        return (
            <div className={styles.pMsg} >
                <div   >111</div>
                <i className="iconfont icon-shouji"></i>
                {/* <img  src={imgUrl} alt={"网络图片"} /> */}
            </div>
        );
    }
}
export default AccordionExmple;