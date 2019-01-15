// @flow
import React, { Component } from 'react'
import { Heading } from 'rebass'
import { padding } from '../Theme'
import columnData from '../Config/columnData'
import Scroller from './Scroller'
import Page from './Page'
import VariableBox from './VariableBox'

//types
import type { Variable } from '../Types/summary'
import type { UpdateVariableType } from '../App'

type Props = {
    variable: Variable,
    updateVariable: UpdateVariableType
}

class VariableSelector extends Component<Props> {
    handlePress = (variable: string) => {
        this.props.updateVariable(variable)
    }

    render() {
        return (
            <Page>
                <Heading fontSize={[6]} textAlign="center" p={padding.large} color="blue.1">
                    Pick a variable
                </Heading>
                <Scroller>
                    {columnData.map(({ colName: variable, readableName }) => {
                        const active = variable === this.props.variable
                        return (
                            <VariableBox
                                key={variable}
                                onClick={() => this.handlePress(variable)}
                                {...{ active, readableName }}
                            />
                        )
                    })}
                </Scroller>
            </Page>
        )
    }
}

export default VariableSelector
