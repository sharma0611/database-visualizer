// @flow
import React, { Component } from 'react'
import { Flex, Box } from 'rebass'

// components
import VariableSelector from './VariableSelector'
import VariableSummary from './VariableSummary'
import type { Variable, HasErrored, IsLoading, SummaryData } from '../Types/summary'
import type { UpdateVariableType } from '../App'

type Props = {
    variable: Variable,
    hasErrored: HasErrored,
    isLoading: IsLoading,
    summaryData: SummaryData,
    updateVariable: UpdateVariableType
}

class DataVisualizer extends Component<Props> {
    render() {
        const { variable, updateVariable, summaryData, hasErrored, isLoading } = this.props
        return (
            <Flex bg="offwhite" flexWrap="wrap">
                <Box width={[1, 1 / 4]}>
                    <VariableSelector {...{ variable, updateVariable }} />
                </Box>
                <Box width={[1, 3 / 4]}>
                    <VariableSummary {...{ variable, summaryData, hasErrored, isLoading }} />
                </Box>
            </Flex>
        )
    }
}

export default DataVisualizer
