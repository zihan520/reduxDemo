import React, { createContext,useReducer } from 'react';
export const  colorContext = createContext({});
export const UPDATE_COLOR = 'updataColor';
const reducer = (state,action)=>{
    switch (action.type) {
        case UPDATE_COLOR:
            /*复杂逻辑这里面还有其他代码*/
            return action.value;
        default:
            return state;
    }
}
export const Color = (props)=>{
    console.log(props);
    const [ color,dispatch ] = useReducer(reducer,"blue");
    return (
        <colorContext.Provider value={{color,dispatch}}>
            {props.children}
        </colorContext.Provider>
    )
}