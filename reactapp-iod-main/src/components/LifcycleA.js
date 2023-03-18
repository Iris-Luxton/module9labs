import React, { Component } from 'react'
import LifecycleB from './LifecycleB';
class LifcycleA extends Component {

  
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'naveed',
         age: 45
      }
      console.log("calling Constructor A");
    }
    static getDerivedStateFromProps(props, state){
        console.log("calling getDerivedStateFromProps A");
        state.tel ='wwewew'
        return state;
    }

    componentDidMount(){
        console.log("calling componentDidMount A");
        /* console.log("this.state.name: "+this.state.name);
        console.log("this.state.age: "+this.state.age);
        console.log("this.state.tel: "+this.state.tel);
        console.log("this.state.email: "+this.state.email);
        console.log("this.state.addr: "+this.state.addr); */
    }

    shouldComponentUpdate(){
      console.log("calling shouldComponentUpate A");
      return true;
    }

    getSnapshotBeforeUpdate(){
      console.log("calling getSnapshotBeforeUpdate A")
      return null;
    }

    componentDidUpdate(){
      console.log("calling componentDidUpdate A")
    }


    changeState = () =>{
      this.setState({
        name: "Code Testing"
      })
    }
    render() {
      
      
              
      console.log("calling render A");
      return (
          <div>
              <div>LifcycleA</div>
              <LifecycleB />
              <button onClick={this.changeState} >Change State</button>
          </div>
      )
    }
}

export default LifcycleA