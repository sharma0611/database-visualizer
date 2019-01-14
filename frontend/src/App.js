// @flow
import React, { Component } from 'react'
import './App.css'
import { Provider as RebassProvider } from 'rebass'

// page
import DataVisualizer from './Components/DataVisualizer'
import Theme from '../Theme'

class App extends Component {
    render() {
        return (
            <RebassProvider theme={Theme}>
                <DataVisualizer />
            </RebassProvider>
        )
    }
}

export default App
