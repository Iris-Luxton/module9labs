import React from "react";

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.inputname = React.createRef();
      this.inputtel = React.createRef();
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.inputname.current.value);
      alert('A tel was submitted: ' + this.inputtel.current.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={this.inputname} />
          </label>
          <label>
            Tel:
            <input type="text" ref={this.inputtel} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default NameForm;