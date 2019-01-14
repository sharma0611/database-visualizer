// @flow
import React, { Component } from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'

// page
import DataVisualizer from './Components/DataVisualizer'
import Theme from './Theme'

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={Theme}>
                <DataVisualizer />
            </ThemeProvider>
        )
    }
}

export default App
