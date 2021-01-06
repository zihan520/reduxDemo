import React from 'react';
import { Table } from 'antd';
class StandartTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dataSource:[]
        }
    }
    componentDidMount(){
        this.setState({
            dataSource:[{name:"lili",age:28,addr:"江苏省南京市",id:2}]
        })
    }
    render(){
        const { columns,pagination } = this.props;
        const rowSelection = {}
        return(
            <Table 
            columns={columns}
            dataSource = {this.state.dataSource}
            pagination={pagination||false}
            rowSelection={rowSelection}
            />
        )
    }
}
export default StandartTable;