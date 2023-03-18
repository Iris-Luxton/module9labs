import React, { Component } from "react";

class WelcomeParam extends Component{

    render(){
        const FName1  = this.props.FName;
        const LName1  = this.props.LName;
        

        const {FName, LName} = this.props;
        return(
            <div>
                <h1>{FName} {LName}! Welcome to React World - Class Component</h1>
            </div>
        ) 

    }

}

export default WelcomeParam