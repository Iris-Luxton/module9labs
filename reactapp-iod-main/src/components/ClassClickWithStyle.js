import React, { Component } from "react";
import styled from 'styled-components'
//import styled from 'styled-components/native'
//import { StyleSheet } from 'react-native';

//styled-components/native

const StyledWrap = styled.div`
	background: red;
	color: black;
  `;
  
  const ExtendedStyle = styled(StyledWrap)`
	color: white;
  `;

  const StyledWrap2 = styled.div`
  background: red;
  color: black;
`;


const StyledWrap1 = styled.div`
	background: red;
	color: black;
  `;

class ClassClickWithStyle extends Component {

    clickHandler(){
        console.log("I am clicked")
    }

    render(){
        return(
            <StyledWrap2>
                <button onClick={this.clickHandler}> Click Me</button>
                <ExtendedStyle>Test with Extended Style</ExtendedStyle>
                <div>test 1231</div>
            </StyledWrap2>
        )
    }

}
export default ClassClickWithStyle