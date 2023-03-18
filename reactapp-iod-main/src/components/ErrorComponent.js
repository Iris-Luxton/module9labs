import React from 'react'

class ErrorComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      try {
        console.log('Some Clicks');
        let anum = '';
        let bnum = 4/0;
        console.log('bnum -> '+bnum);
      } catch (error) {
        this.setState({ error });
      }
    }
  
    render() {
      if (this.state.error) {
        return <h1>Caught an error.</h1>
      }
      return <button onClick={this.handleClick}>Click Me</button>
    }
  }

  export default ErrorComponent;