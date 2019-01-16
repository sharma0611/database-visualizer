//@flow
import React from 'react'
import { Card, Text, Flex, Box } from 'rebass'
import { padding } from '../Theme'
import styled from 'styled-components'

const VerticalFlex = styled(Flex).attrs({
    justifyContent: 'center',
    alignItems: 'center'
})`
    height: 150px;
    width: 150px;
`
type Props = {
    active: boolean,
    readableName: string,
    onClick: Function
}

const VariableBox = ({ active, readableName, onClick }: Props) => {
    return (
        <Card
            borderRadius={8}
            m={padding.small}
            onClick={onClick}
            bg={active ? 'blue.1' : 'white'}
            css={{ display: 'block' }}
            boxShadow="0 2px 6px rgba(0, 0, 0, 0.25)"
        >
            <VerticalFlex>
                <Box>
                    <Text
                        fontSize={[4, 5]}
                        color={active ? 'white' : 'blue.1'}
                        textAlign="center"
                        p={[padding.small, padding.xLarge]}
                    >
                        {readableName}
                    </Text>
                </Box>
            </VerticalFlex>
        </Card>
    )
}

export default VariableBox
