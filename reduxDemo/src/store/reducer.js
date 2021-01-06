import DefaultValue from './initialValue';
import * as actions from './actionTypes';
const defaultValue = new DefaultValue();
export default (state = defaultValue,action)=>{
    switch(action.type){
        case actions.UPDATE_INPUT:
            return state.merge({
                inputValue:action.value
            });
        case actions.UPDATE_LIST:
            let newState2 = JSON.parse(JSON.stringify(state));
            newState2.list.push(newState2.inputValue);
            return state.merge({
                list:newState2.list,
                inputValue:""
            });
        case actions.DELETE_ITEM:
            let newState3 = JSON.parse(JSON.stringify(state));
            let index = state.list.findIndex(item=>item === action.payload);
            if(index!==-1){
                newState3.list.splice(index,1);
            }
            return state.merge({list:newState3.list});
        default:
            return state;
    }
}