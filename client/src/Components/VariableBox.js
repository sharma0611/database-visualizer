//@flow
import React from 'react'
import { Card, Text } from 'rebass'
import { padding } from '../Theme'

type Props = {
    active: boolean,
    readableName: string,
    onClick: Function
}

const VariableBox = ({ active, readableName, onClick }: Props) => {
    return (
        <Card
            borderRadius={8}
            m={3}
            onClick={onClick}
            bg={active ? 'blue.1' : 'white'}
            boxShadow="0 2px 6px rgba(0, 0, 0, 0.25)"
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
}

export default VariableBox
