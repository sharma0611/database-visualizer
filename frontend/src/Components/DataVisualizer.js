// @flow
import React, { Component } from 'react'
import { Flex, Box, Heading } from 'rebass'
import styled from 'styled-components'
import { padding } from '../Theme'

// components
import VariableSelector from './VariableSelector'
import DataTable from './DataTable'

class DataVisualizer extends Component {
    render() {
        return (
            <Flex bg="offwhite" flexWrap="wrap">
                <Box width={[1, 1 / 4]}>
                    <VariableSelector />
                </Box>
                <Box width={[1, 3 / 4]}>
                    <DataTable />
                </Box>
            </Flex>
        )
    }
}

export default DataVisualizer
