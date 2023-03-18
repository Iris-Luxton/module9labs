import React, { Component } from "react";

class ClassClick extends Component {

    clickHandler(){
        console.log("I am clicked with class")
    }

    render(){
        return(
          <div>
                <button onClick={this.clickHandler}> Click - Class</button>
          </div>
        )
    }

}
export default ClassClick