// @flow
import React, { Component } from 'react'
import { Flex, Box, Card, Text, Heading } from 'rebass'
import styled from 'styled-components'
import { padding, colors } from '../Theme'

const PROPS = {
    variables: [
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',

        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',

        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City',
        'Education',
        'City'
    ]
}

const Scroller = styled(Box)`
    flex-grow: 1;
    overflow: auto;
`

const VariableButton = styled(Card)``

const Page = styled(Flex)`
    height: 100vh;
    overflow: hidden !important;
`

class VariableSelector extends Component {
    state = {
        selectedVariable: ''
    }

    handlePress = variable => {
        this.setState({ selectedVariable: variable })
    }

    render() {
        const { variables } = PROPS

        return (
            <Page flexDirection="column">
                <Heading fontSize={[6]} textAlign="center" p={padding.large} color="blue.1">
                    Pick a variable
                </Heading>
                <Scroller>
                    {variables.map(variable => {
                        const active = variable === this.state.selectedVariable
                        return (
                            <VariableButton
                                borderRadius={8}
                                m={3}
                                onClick={() => this.handlePress(variable)}
                                bg={active ? 'blue.1' : 'white'}
                                boxShadow="0 2px 6px rgba(0, 0, 0, 0.25)"
                            >
                                <Text
                                    fontSize={[4]}
                                    color={active ? 'white' : 'blue.1'}
                                    textAlign="center"
                                    p={padding.xLarge}
                                >
                                    {variable}
                                </Text>
                            </VariableButton>
                        )
                    })}
                </Scroller>
            </Page>
        )
    }
}

export default VariableSelector
