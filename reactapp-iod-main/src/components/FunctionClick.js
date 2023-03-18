import React from "react";



function FunctionClick(){
	
  
	function clickHandler(){
		console.log('button is clicked with Function');
	}

	return(
		<div>
			<button onClick={clickHandler}>Click - Function</button>
		</div>
	)
}

export default FunctionClick