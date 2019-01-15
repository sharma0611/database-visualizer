// @flow
import React, { Component } from 'react'
import { Card, Text, Heading } from 'rebass'
import { padding } from '../Theme'
import columnData from '../Config/columnData'
import Scroller from './Scroller'
import Page from './Page'

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
                            <Card
                                borderRadius={8}
                                m={3}
                                onClick={() => this.handlePress(variable)}
                                bg={active ? 'blue.1' : 'white'}
                                boxShadow="0 2px 6px rgba(0, 0, 0, 0.25)"
                                key={variable}
                            >
                                <Text
                                    fontSize={[4]}
                                    color={active ? 'white' : 'blue.1'}
                                    textAlign="center"
                                    p={padding.xLarge}
                                >
                                    {readableName}
                                </Text>
                            </Card>
                        )
                    })}
                </Scroller>
            </Page>
        )
    }
}

export default VariableSelector
