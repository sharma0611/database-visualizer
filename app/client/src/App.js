// @flow
import React, { Component } from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'

// page
import DataVisualizer from './Components/DataVisualizer'
import Theme from './Theme'
import { fetchSummaryData } from './Actions/thunks'

class App extends Component {
    render() {
        const { variable, hasErrored, isLoading, summaryData, updateVariable } = this.props
        return (
            <ThemeProvider theme={Theme}>
                <DataVisualizer
                    {...{ variable, hasErrored, isLoading, summaryData, updateVariable }}
                />
            </ThemeProvider>
        )
    }
}

const mapStateToProps = state => {
    return {
        variable: state.variable,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading,
        summaryData: state.summaryData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateVariable: variable => dispatch(fetchSummaryData(variable))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
