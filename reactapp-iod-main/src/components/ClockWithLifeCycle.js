import React, { Component } from 'react'

class ClockWithLifeCycle extends Component {

  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }  

  componentDidMount(){
    this.timeID = setInterval( () => this.tick(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timeID);
  }

  tick(){
    this.setState({date: new Date()})
  }

  render() {
    return (
        <div>
            <h1>Hello World!</h1>
            <h2>it is {this.state.date.toLocaleTimeString()}</h2>
        </div>
    )
  }
}
