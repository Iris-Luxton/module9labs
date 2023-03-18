import React, {Component} from "react";

class Counter extends Component {
 
 constructor(props){
    super(props);
    this.state = {
        count : 0
    }
 }
 
 incrementCounter(){
    this.setState( prevState => ({
            count : prevState.count +1
        }),
        ()=> {
          console.log('my counter is :'+this.state.count);
        }
    )
 };


 render(){
    return( 
    <div>
        <div>Count: {this.state.count} </div>
        <button onClick={ () => this.incrementCounter()} >Increment</button>
        <button onClick={ () => this.incrementFive()} >Increment Five</button>
        <button onClick={this.incrementCounter.bind(this)} >Increment 1</button>
    </div>
        
    )
 }

}

export default Counter