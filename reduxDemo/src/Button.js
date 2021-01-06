import React,{  PureComponent } from 'react';
import  './Button.less'
export default class NewButton extends PureComponent{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div>
                <button className="btn">按钮组件</button>
                <button className="primary">有背景色的按钮</button>
                <div>test hot upload</div>
            </div>
        )
    }
}