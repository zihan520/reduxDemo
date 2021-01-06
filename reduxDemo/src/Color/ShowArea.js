import React,{useContext} from 'react';
import { colorContext } from "./example"
function ShowArea(){
    const { color } = useContext(colorContext);

    return (
        <div>
            <h2 style={{color:color}}>当前颜色为{color}</h2>
        </div>
    )
}
export default ShowArea;