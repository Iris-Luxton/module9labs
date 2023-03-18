import React, { Component } from "react";

class WelcomeParamChildren extends Component{

    render(){
        
        const {FName, LName, children} = this.props;
        return(
            <div>
                <h1>{FName} {LName}! Welcome to React World - Class Component</h1>
                {children}
            </div>
        ) 

    }

}

export default WelcomeParamChildren