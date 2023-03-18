import React, { useState, useEffect } from 'react'

function HookUseState() {

    const [count, setCount ] = useState(0);

    
    return (
        <div>
            <h1>HookUseState</h1>
            <p>You clicked {count} times </p>
            <button onClick = { () => setCount(count+1) } >
                Click Me
            </button>

        </div>
    );
}

export default HookUseState;

/*

Hooks don't work inside functions, nested functions and inside javascripts

10 build in hooks

Basic Hooks
    useState, useEffect, useContext
Additional Hooks
    useRender, useCallback, useMemo, useRef, useImperativeHandle
    useLayouteffect, useDebugValue
*/
