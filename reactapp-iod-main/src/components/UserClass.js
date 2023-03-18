import React, { Component } from 'react'

class UserClass extends Component {

    user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };


    formatName(user){
        return user.firstName + ' '+ user.lastName;
    }  

    render() {
        return (
          <div> 
            <h1>{ this.formatName(this.user) }</h1>
          </div>
        )
    }
}

export default UserClass
