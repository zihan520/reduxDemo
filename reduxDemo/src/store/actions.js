import * as actions from './actionTypes';
export function handleChange(payload){
    return  {
        type:actions.UPDATE_INPUT,
        value:payload.target.value
    }
}
export function addList(payload){
    return {
        type:actions.UPDATE_LIST,
        payload
    }
}
export function deleteItem(payload){
    return {
        type:actions.DELETE_ITEM,
        payload
    }
}