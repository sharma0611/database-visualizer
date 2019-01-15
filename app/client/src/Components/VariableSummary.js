// @flow
import React, { Component } from 'react'
import { Box, Heading, Text } from 'rebass'
import { padding } from '../Theme'
import SummaryTable from './SummaryTable'
import Scroller from './Scroller'
import Page from './Page'
import { colNameToHumanFriendly } from '../Config/columnData'

class VariableSummary extends Component {
    render() {
        const { summaryData, variable, hasErrored, isLoading } = this.props
        const { data: rows, omitted } = summaryData
        const readableVariable = colNameToHumanFriendly(variable)
        return (
            <Page>
                <Heading fontSize={[6]} textAlign="center" p={padding.large} color="blue.1">
                    Summary
                </Heading>
                <Scroller>
                    {omitted > 0 && (
                        <Text textAlign="right" p={padding.medium}>
                            {omitted} lines ommitted.
                        </Text>
                    )}
                    <Box mx={5} my={4}>
                        <SummaryTable {...{ rows, readableVariable, hasErrored, isLoading }} />
                    </Box>
                </Scroller>
            </Page>
        )
    }
}

export default VariableSummary
