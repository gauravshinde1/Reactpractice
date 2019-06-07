import React, { Component } from 'react';
import InputLabel from './InputLabel';
import Card from './Card';

class MainForm extends Component {
    constructor(){
        super();
        this.state={
            fname: "",
            lname: "",
            phone: "",
            email: "",
            password: ""
        }
    }
    render() {
        return (
            <div className="container">
            <div class="row">
                <form>
                <div class="row">                    
                    <InputLabel value={this.state.fname} onChange={this.onChange} labeltext={'First name'} place={'Enter First name'} type={'text'} />
                    <InputLabel value={this.state.lname} onChange={this.onChange} labeltext={'Last name'} place={'Enter Last name'} type={'text'} />
                    <InputLabel value={this.state.phone} onChange={this.onChange} labeltext={'Phone'} place={'Enter phone number'} type={'number'} />
                    <InputLabel value={this.state.email} onChange={this.onChange} labeltext={'Email'} place={'Enter email id'} type={'email'} />
                    <InputLabel value={this.state.password} onChange={this.onChange} labeltext={'Password'} place={'Enter Password'} type={'password'} />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    {/* <label>{props.label}</label>
                    <input type={props.type} placeholder={props.placeholder}>{props.input}</input> */}
                </form>
                <Card/>
            </div>
        </div>
        )
    }
}

export default MainForm;

