import { List, InputItem, Toast } from 'antd-mobile';
import React,{  PureComponent } from 'react';
import Button from './Button'
export default class Mobile extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            value: '',
        }
    }
    componentDidMount(){
        let  sUserAgent = navigator.userAgent.toLowerCase();
          console.log(sUserAgent);
          this.setState({
            sUserAgent:sUserAgent
          })
    }
    onErrorClick = () => {
        if (this.state.hasError) {
          Toast.info('Please enter 11 digits');
        }
      }
      onChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
          this.setState({
            hasError: true,
          });
        } else {
          this.setState({
            hasError: false,
          });
        }
        this.setState({
          value,
        });
      }
    render(){
       return (
        <div>
        <List renderHeader={() => 'Confirm when typing'}>
          <InputItem
            type="phone"
            placeholder="input your phone"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.value}
          >手机号码</InputItem>
        </List>
        <Button />
      </div>
       ) 
    }
}