import React, { Component } from "react";

class EventBinding extends Component {

    constructor(){
        super();
        this.state ={
            message: 'Welcome to React'
        }
        this.clickMe = this.clickMe.bind(this);
    }

    clickMe(){
        console.log('It is clicked');
        this.setState({
            message: 'Good Bye'
        })
    }

    clickHandler = () => {
        this.setState( 
            (prevState) => (
                {
                message : prevState.message === 'Welcome' ? 'Good Bye': 'Welcome'
                }
            ), 
            () =>{
                console.log("this.state.message :"+this.state.message);
            }
        )
    }

    
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                
                <button onClick={this.clickMe}>Click Me 1</button>
                <button onClick={()=> this.clickMe()}>Click Me</button>

                <button onClick={this.clickHandler}>Click Handler</button>
                {/*
                    <button onClick={()=> this.clickMe()}>Click Me</button>
                    <button onClick={this.clickMe}>Click Me 1</button>
                    <button onClick={this.clickHandler}>Click Handler</button>
                */}
                
                
            </div>
        )
    }
}
export default EventBinding