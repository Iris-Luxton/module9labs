import React, { Component } from 'react'
import { ThemeConsumer } from 'styled-components'
import { ThemeContext } from './contexts/ThemeContext'

export default class NavBar extends Component {
    
    static contextType = ThemeContext;
    render() {
        const {isLightTheme, light, dark } = this.context;
        const theme = isLightTheme? light: dark;
        return (
        <nav style={ {background: theme.ui, color: theme.syntax} }>
                <h1>My Application</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
        </nav>
        )
    }
    /*
    render() {
        return(
            <ThemeContext.Consumer>{ (context) => {
                const {isLightTheme, light, dark } = context;
                const theme = isLightTheme? light: dark;
                return (
                <nav style={ {background: theme.ui, color: theme.syntax} }>
                        <h1>My Application</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                </nav> 
                )
            }}
            </ThemeContext.Consumer>
        )
    }
    */


}
