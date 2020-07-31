import React from 'react'

// create context returns us an object with these two properties
const { Consumer, Provider } = React.createContext()

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider