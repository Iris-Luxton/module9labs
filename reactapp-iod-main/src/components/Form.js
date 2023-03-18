import React, {Component} from "react";
import styled from 'styled-components';


const TextInput = styled.div`
        display: flex;
        margin: 10px;
        font-size: 14px;
    `
    ;

const StyledDiv = styled.div`
	display: flex;
    justify-content: center;
	flex-direction: row;
    margin: 30px;
    align-items: center;
  `
;

class Form extends Component {
  
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            comments:'',
            topic:'react' 
        }
    }
    
    
    ChangeEmail = event =>{
        this.setState({
            email: event.target.value
        })
    }

    ChangeComments = event =>{
        this.setState({
            comments : event.target.value
        })
    }

    ChangeTopic = event =>{
        this.setState({
            topic: event.target.value
        })
    }

    SubmitForm = event =>{
        alert (`${this.state.name} ${this.state.email} ${this.state.comments} ${this.state.topic}`);

        event.preventDefault();
    }


    ChangeName = event =>{
        console.log('event.target.value :'+event.target.value);     
        this.setState({
            name : event.target.value
        })
    }

    render(){
        let {name, email, comments, topic } =  this.state; 

        return(
            <StyledDiv>
                <form onSubmit={this.SubmitForm}>
                <h2>my testing form</h2>
                <TextInput>

                    <label>Name</label>
                    <input 
                        type='text' 
                        value={name} 
                        onChange= {this.ChangeName}/>
                </TextInput> 
                <TextInput>
                    <label>Email</label>
                    <input 
                        type='text' 
                        value={email}
                        onChange ={this.ChangeEmail} />
                </TextInput> 
                <TextInput>
                    <label>Comments</label>
                    <textarea 
                        value={comments} 
                        onChange={this.ChangeComments}
                    />
                </TextInput>    
                <TextInput>
                    <label>Select Topic</label>
                    <select value={topic} onChange={this.ChangeTopic}>
                        <option value='react'>React</option>
                        <option value='node'>Node</option>
                        <option value='angular'>Angular</option>
                    </select>
                </TextInput>

                <button type="Submit"  >Submit</button>
                </form>
            </StyledDiv>
        )
    }

}
export default Form