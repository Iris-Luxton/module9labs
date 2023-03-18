import React, { Component} from "react";
import { Navigate } from "react-router-dom";

class LoginForm extends Component {
  state = { user: null, error: null };

  async handleSubmit(event) {
    event.preventDefault();
    try {
      let user = await this.login(event.target);
      this.setState({ user });
    } catch (error) {
      this.setState({ error });
    }
  };

login(e){
    return ({name: e.target.username, password: e.target.password});
  }

  render() {
    let { user, error } = this.state;
    console.log('error :'+ JSON.stringify(error));
    return (
      <div>
        {error && <p>{error.message}</p>}
        {user && (
          <Navigate to="/successmessage" replace={true} />
        )}
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
