// @flow
import React from 'react'
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

const DataVisualizer = (props: Props) => {
    const { variable, updateVariable, summaryData, hasErrored, isLoading } = props
    return (
        <Flex flexWrap="wrap">
            <Box width={1}>
                <VariableSelector {...{ variable, updateVariable }} />
            </Box>
            <Box width={1} alignItems="center">
                <VariableSummary {...{ variable, summaryData, hasErrored, isLoading }} />
            </Box>
        </Flex>
    )
}

export default DataVisualizer
