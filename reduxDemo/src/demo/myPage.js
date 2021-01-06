import React from 'react';
import { connect } from 'react-redux';
import * as funcs from '../store/actions'
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';
const allAction = [funcs];
function mapStateToProps(state){
    return {
        inputValue : state.inputValue,
        list:state.list
    }
}
function mapToDispatch(dispatch){
    const creators = Map().merge(...allAction).
    filter(value=>typeof value === 'function').
    toObject();
    return {
        actions:bindActionCreators(creators,dispatch),
        dispatch
    }
    // return {
    //     handleChange(e){
    //         const action = {
    //             type:actions.UPDATE_INPUT,
    //             value:e.target.value
    //         }
    //         dispatch(action);
    //     },
    //     addList(){
    //         dispatch({type:actions.UPDATE_LIST})
    //     }
    // }
    
}
class MyPage extends React.PureComponent{
    render(){
        const { actions:{handleChange,addList,deleteItem},inputValue } = this.props;
        return (
            <div>
                <input value={inputValue} onChange={handleChange}/>
                <button onClick={addList}>submit</button>
                <ul>
                {
                        this.props.list.map((item,index)=>{
                            return (<li  key={index}>{item}
                            &nbsp;&nbsp;<button onClick={()=>deleteItem(item)}>删除</button>
                            </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapToDispatch)(MyPage)