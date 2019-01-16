// @flow
import React from 'react'
import { Flex } from 'rebass'

//components
import Page from './Page'
import SummaryTable from './SummaryTable'
import OmittedLines from './OmittedLines'
import BigHeading from './BigHeading'

//utils
import { colNameToHumanFriendly } from '../Config/columnData'

//types
import type { Variable, IsLoading, HasErrored, SummaryData } from '../Types/summary'

type Props = {
    variable: Variable,
    summaryData: SummaryData,
    isLoading: IsLoading,
    hasErrored: HasErrored
}

const VariableSummary = (props: Props) => {
    const { summaryData, variable, hasErrored, isLoading } = props
    const { data: rows, omitted } = summaryData
    const readableVariable = colNameToHumanFriendly(variable)
    return (
        <Page>
            {rows && <BigHeading>Summary</BigHeading>}
            {!!omitted && omitted > 0 && !isLoading && <OmittedLines {...{ omitted }} />}
            <Flex width={1} my={4} justifyContent="center">
                <SummaryTable {...{ rows, readableVariable, hasErrored, isLoading }} />
            </Flex>
        </Page>
    )
}

export default VariableSummary
