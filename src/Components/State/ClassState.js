import React, { Component } from 'react'

export class ClassState extends Component {
    state={
        name:'Gaurav',
        age:12
    }

    // onchangeHandler = (e) =>{
    //     this.setState({
    //         [e.target.name]:e.target.value,
    //         [e.target.age]:e.target.value
    //     })
    // }

    render() {
        return (
            // <Fragment>
            //     <div style={{marginBottom:"15px"}}>{this.state.name}</div>
            //     <div style={{marginBottom:"15px"}}>{this.state.age}</div>
            //     <input type="text" name ="name" onChange={this.onchangeHandler} value={this.state.name} />
            //     <input type="number" name ="age" onChange={this.onchangeHandler} value={this.state.age} />
            // </Fragment>
            <div onClick={ () => {this.setState({
                name :"Shubham",
                age :"22"
            }) }}>
                {this.state.name}
                {this.state.age}
            </div>
        )
    }
}

export default ClassState;

