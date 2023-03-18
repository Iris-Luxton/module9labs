import { Component } from "react";


function userinfo (props){
    return <h1>i am testing it, {props.name}</h1>
}


class UserInfo extends Component {

    render (){
        return <h1>i am testing it, {this.props.name}</h1>
 
    }
}
