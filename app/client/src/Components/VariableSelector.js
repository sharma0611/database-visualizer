// @flow
import React, { Component } from 'react'
import { Flex, Box, Card, Text, Heading } from 'rebass'
import styled from 'styled-components'
import { padding } from '../Theme'
import columnData from '../Config/columnData'

const Scroller = styled(Box)`
    flex-grow: 1;
    overflow: auto;
`

const Page = styled(Flex)`
    height: 100vh;
    overflow: hidden !important;
`

class VariableSelector extends Component {
    handlePress = variable => {
        this.props.updateVariable(variable)
    }

    render() {
        return (
            <Page flexDirection="column">
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
