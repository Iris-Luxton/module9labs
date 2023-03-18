import React from 'react'

class SetStateExample extends React.Component {
    constructor(props) {
  
       // React components always have to 
       // call super in their constructors 
       // to be set up properly
      super(props);
  
       // this.state should be an object
       // representing the initial “state” 
       // of any component instance
      this.state = {
        mood:   'great',
        hungry: false
      };
    }
   
    render() {
        
      return <div>{this.state.hungry}</div>;
    }
  }

  export default SetStateExample;
