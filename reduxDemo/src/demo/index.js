import React, {Fragment,useState, useMemo,useEffect} from 'react'

// 产品名称列表
const nameList = ['apple', 'peer', 'banana', 'lemon']

const Example = (props) => {
    // 产品名称、价格
    const [price, setPrice] = useState(0)
    const [name, setName] = useState('apple')

    // 假设有一个业务函数  获取产品的名字
    useEffect(()=>{
        getProductName();
        console.log("name发生了改变")
    },[name])
    function getProductName() {
        console.log('getProductName触发')
        return name
    }

    return (
        <Fragment>
            <p>{name}</p>
            <p>{price}</p>
            <p>{getProductName()}</p>
            <button onClick={() => setPrice(price+1)}>价钱+1</button>
            <button onClick={() => setName(nameList[Math.random() * nameList.length << 0])}>修改名字</button>
        </Fragment>
    )
}
export default Example
// import React,{ useState,useEffect } from 'react';
// const arr = ["一","二","三","四","五"]
// function Demo(){
//
//     const [ workDay, setWorkDay] = useState('周一')
//     const [ hopeWorkDay, setHopeWorkDay] = useState('周一')
//     useEffect(()=>{
//         console.log("父组件发生了改变")
//     },[workDay])
//     return (
//         <div>
//          <p>工作日中的{workDay}</p>
//             <ChildDemo name={hopeWorkDay} />
//
//          <button onClick={()=>setWorkDay(arr[parseInt(Math.random()*10)])}>改变当前工作日的时间</button>
//         </div>
//     )
// }
// function ChildDemo({name}){
//     useEffect(()=>{
//         console.log("子组件发生了改变")
//     },[name])
//     return(
//         <p>希望是工作日中的{name}</p>
//     )
// }
// export default Demo;