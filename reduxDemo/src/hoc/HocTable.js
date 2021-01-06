import React from 'react';
const withTable = (props)=> (WrappedComponent)=>{
    return class withTable extends React.Component{
        render(){
            return(<WrappedComponent {...props}/>)
        }
    }
}
export default withTable;