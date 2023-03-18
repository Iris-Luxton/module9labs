import React from 'react'
import BookList from './BookList'
import ThemeContextProvider from './contexts/ThemeContext'
import NavBar from './NavBar'
import ThemeToggle from './ThemeToggle'

export default function ContextProviderExample() {
  return (
    <div>
        <ThemeContextProvider>
            <NavBar />
            <BookList />
            <ThemeToggle />
        </ThemeContextProvider>

    </div>
  )
}
