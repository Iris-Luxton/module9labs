import React, { useContext } from 'react'

export default  function MoodHappy1() {
    return (
        <MoodContext.Consumer>
            {({mood}) => <p>{mood}</p> }
        </MoodContext.Consumer>
    );
}