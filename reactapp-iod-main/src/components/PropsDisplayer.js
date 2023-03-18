import React, { Component } from 'react'

export default class PropsDisplayer extends Component {
  render() {
    const stringProps = JSON.stringify(this.props);
    return (
        <div>
            <h1>CHECK OUT MY PROPS OBJECT</h1>
            <h2>this.props: {stringProps}</h2>
            <h3>this.props.firstName: {this.props.firstName} this.props.lastName:{this.props.lastName}</h3>
         </div>
        
    )
  }
}
