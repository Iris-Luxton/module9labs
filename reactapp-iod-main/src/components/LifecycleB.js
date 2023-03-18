import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'naveed',
         age: 45
      }
      console.log("calling Constructor B");
    }
    static getDerivedStateFromProps(props, state){
        console.log("calling getDerivedStateFromProps B");
        state.tel ='wwewew'
        return state;
    }

    componentDidMount(){
        console.log("calling componentDidMount B");
        /* console.log("this.state.name: "+this.state.name);
        console.log("this.state.age: "+this.state.age);
        console.log("this.state.tel: "+this.state.tel);
        console.log("this.state.email: "+this.state.email);
        console.log("this.state.addr: "+this.state.addr); */
    }

    shouldComponentUpdate(){
      console.log("calling shouldComponentUpdate B ");
      return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('calling getSnapshotBeforeUpdate B')
      return null;
    }

    componentDidUpdate(){
      console.log("calling componentDidUpdate B")
    }

  render() {
    //this.state.email ='wwe4444wew'
    console.log("calling render B");
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB