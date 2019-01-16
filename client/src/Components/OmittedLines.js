import React from 'react'
import { Text } from 'rebass'
import { padding } from '../Theme'

type Props = {
    omitted: number
}

const OmmittedLines = (props: Props) => (
    <Text textAlign="center" p={padding.medium}>
        {props.omitted} lines ommitted.
    </Text>
)

export default OmmittedLines
