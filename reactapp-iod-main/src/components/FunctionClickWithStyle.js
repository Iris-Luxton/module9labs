import React from "react";
import styled from 'styled-components'

function FunctionClickWithStyle(){
	
  const MyStyle = styled.div`
	background: blue;
	color: red;
  `;
  
  const ExtendedStyle = styled(MyStyle)`
	color: green;
  `;

	function clickHandler(){
		console.log('button is clicked');
	}

	return(
		<div>
			<button onClick={clickHandler}>Click</button>
			<div>funct I am testing without style</div>
			<MyStyle>funct Test with Style</MyStyle>
		</div>
	)
}

export default FunctionClickWithStyle