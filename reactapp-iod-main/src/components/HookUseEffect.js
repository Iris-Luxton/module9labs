import React, { useState, useEffect } from 'react'

function HookUseEffect() {

    const [count, setCount ] = useState(0);

    useEffect( () => {
        document.title = `You clicked ${count} times`;
        document.getElementById("myMsg").innerHTML = `You have clicked ${count} times`;
    })

    
    return (
        <div>
            <h1>Hook Use Effect</h1>
            <p>You clicked {count} times </p>
            <button onClick = { () => setCount(count+1) } >
                Click Me
            </button>
            <p id="myMsg"></p>
            
        </div>
    );
}

export default HookUseEffect;