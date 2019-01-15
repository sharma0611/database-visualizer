// @flow
import React from 'react'
import { Heading } from 'rebass'
import { padding } from '../Theme'

const Error = () => (
    <Heading fontSize={[6]} textAlign="center" p={padding.large} color="blue.1">
        An error has been encountered. Please try again.
    </Heading>
)

export default Error
