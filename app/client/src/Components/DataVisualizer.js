// @flow
import React, { Component } from 'react'
import { Flex, Box, Heading } from 'rebass'
import styled from 'styled-components'
import { padding } from '../Theme'

// components
import VariableSelector from './VariableSelector'
import VariableSummary from './VariableSummary'

class DataVisualizer extends Component {
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
