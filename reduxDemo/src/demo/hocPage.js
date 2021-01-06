
// import withGists from '../hoc/comHoc' // 引入高阶组件
import HocTable from '../hoc/HocTable'
import StandartTable from '../components/StandartTable'
// class Gists  extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title:"hello world!",
//             canClick:true
//         }
//     }
//     handleChange = ()=>{
//         const { canClick } = this.state;
//         console.log(canClick)
//        if(!canClick){
//            return;
//        }
//        console.log(canClick)
//        this.setState({
//         canClick:false
//        })
//        console.log("跳转页面的逻辑")
//     }
//     render() {
//         return (
//             <div className="pages-shop" style={{color:"#f00",fontSize:"20px"}}>
//                 {this.props.title}
//                 <p style={{width:"300px",　wordWrap: 'break-word'}}>interestinginterestinginterestinginteresting 双值语法: 第一个值必须为一个无单位数，并且它会被当作 “ 的值。第二个值必须为以下之一</p>
//                 <Button type={"primary"} onClick={this.handleChange}>跳转</Button>
//             </div>
//         )
//     }
// }
const columns = [{title:"姓名",dataIndex:"name"},
{title:"年龄",dataIndex:"age"},{title:"地址",dataIndex:"addr"}]
export default HocTable({columns})(StandartTable);