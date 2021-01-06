import React,{ useContext } from 'react'
import { colorContext,UPDATE_COLOR } from "./example";

export default function Buttons(){
    const { dispatch } = useContext(colorContext)
    return (
        <div>
            <button onClick={()=>{dispatch({type:UPDATE_COLOR,value:"red"})}}>红色</button>
            <button onClick={()=>{dispatch({type:UPDATE_COLOR,value:"green"})}}>绿色</button>
        </div>
    )
}