// @flow
import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'

// page
import DataVisualizer from './Components/DataVisualizer'
import Theme from './Theme'
import { fetchSummaryData } from './Actions/thunks'

// types
import type { State, DispatchWithThunk } from './Types'
import type { Variable, HasErrored, IsLoading, SummaryData } from './Types/summary'

export type UpdateVariableType = (variable: Variable) => void

type Props = {
    variable: Variable,
    hasErrored: HasErrored,
    isLoading: IsLoading,
    summaryData: SummaryData,
    updateVariable: UpdateVariableType
}

class App extends Component<Props> {
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

const mapStateToProps = (state: State): State => {
    return {
        variable: state.variable,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading,
        summaryData: state.summaryData
    }
}

const mapDispatchToProps = (
    dispatch: DispatchWithThunk
): { updateVariable: UpdateVariableType } => {
    return {
        updateVariable: (variable: Variable) => dispatch(fetchSummaryData(variable))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
