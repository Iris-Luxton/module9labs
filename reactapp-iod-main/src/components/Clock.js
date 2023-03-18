import React from 'react'

function tick(props){
    return (
        <div>
            <h1>Hello World!</h1>
            <h2>it is {props.date.toLocaleTimeString()}</h2>
        </div>
      )
}


export default function Clock(props) {
   return (
    tick(props)
  )
}


