import React from 'react';
const withGists =(title)=> (WrappedComponent) =>{
    const withGists = ()=>{
        // const { title } = this.props;
        // console.log(title)
        const text2Upper = title.toUpperCase();
        return  <WrappedComponent
            title={text2Upper}
        />
    }
    // class WithGists extends React.Component {
    //     constructor(props) {
    //         super(props);
    //     }
    //
    //     // componentDidMount() {
    //     //     fetch("https://api.github.com/gists/public")
    //     //         .then((r) => r.json())
    //     //         .then((gists) => this.setState({
    //     //             gists: gists
    //     //         }))
    //     // }
    //
    //     render() {
    //         const { title } = this.props;
    //         console.log(title)
    //         const text2Upper = title.toUpperCase();
    //         return (
    //             <WrappedComponent
    //                 title={text2Upper}
    //             />
    //         )
    //     }
    // }
    return withGists;
}
export default withGists;
