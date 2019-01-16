// @flow
import React, { Component } from 'react'
import { padding } from '../Theme'
import columnData from '../Config/columnData'
import HorizontalScroller from './HorizontalScroller'
import Page from './Page'
import VariableBox from './VariableBox'
import BigHeading from './BigHeading'

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
                <BigHeading>Pick a variable</BigHeading>
                <HorizontalScroller p={padding.large}>
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
                </HorizontalScroller>
            </Page>
        )
    }
}

export default VariableSelector
