import React, { createContext, useContext } from 'react'

const moods = { happy: 'Happy', sad: 'sad'}  
const MoodContext = createContext(moods);

export default function HookContextProvider() {
  return (
    <div>
        <h1>HookContextProvider</h1>
        <MoodContext.Provider value={moods.happy}>
            <MoodHappyUseContext />
            <MoodHappy />
        </MoodContext.Provider>

        <MoodContext.Provider value={moods.sad}>
            <MoodHappy />
        </MoodContext.Provider>
    </div>
  )
};

function MoodHappyUseContext() {

    const mood = useContext(MoodContext);
    return <p> My Mood with useContext : {mood}</p>;
}

function MoodHappy() {
    return (
        <MoodContext.Consumer>{ (mood) =>{
                    return <p>my mood with MoodContext.Consumer : {mood}</p>
                }
            }
        </MoodContext.Consumer>
    );
}





