// @flow
import React, { Component } from 'react'
import { Box, Heading } from 'rebass'
import { padding } from '../Theme'
import SummaryTable from './SummaryTable'

class VariableSummary extends Component {
    render() {
        const { summaryData, variable, hasErrored, isLoading } = this.props
        const { data: rows, omitted } = summaryData
        return (
            <Box>
                <Heading fontSize={[6]} textAlign="center" p={padding.large} color="blue.1">
                    Summary
                </Heading>
                <Box mx={5} my={4}>
                    <SummaryTable {...{ rows, variable, hasErrored, isLoading }} />
                </Box>
            </Box>
        )
    }
}

export default VariableSummary
