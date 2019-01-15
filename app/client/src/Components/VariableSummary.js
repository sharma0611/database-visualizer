// @flow
import React, { Component } from 'react'
import { Box, Heading, Text } from 'rebass'
import { padding } from '../Theme'
import SummaryTable from './SummaryTable'
import Scroller from './Scroller'
import Page from './Page'
import { colNameToHumanFriendly } from '../Config/columnData'

//types
import type { Variable, IsLoading, HasErrored, SummaryData } from '../Types/summary'

type Props = {
    variable: Variable,
    summaryData: SummaryData,
    isLoading: IsLoading,
    hasErrored: HasErrored
}

class VariableSummary extends Component<Props> {
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
                    {omitted && omitted > 0 && (
                        <Text textAlign="right" p={padding.medium}>
                            {omitted} lines ommitted.
                        </Text>
                    )}
                    {readableVariable && rows && rows.length > 0 && (
                        <Box mx={5} my={4}>
                            <SummaryTable {...{ rows, readableVariable, hasErrored, isLoading }} />
                        </Box>
                    )}
                </Scroller>
            </Page>
        )
    }
}

export default VariableSummary
