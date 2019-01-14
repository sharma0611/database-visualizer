// @flow
import React, { Component } from 'react'
import { Flex, Box, Heading } from 'rebass'
import styled from 'styled-components'

// components
import VariableSelector from './Components/VariableSelector'
import DataTable from './Components/DataTable'

class DataVisualizer extends Component {
    render() {
        return (
            <Box>
                <Heading color="violet">Data Visualizer</Heading>
                <VariableSelector />
                <DataTable />
            </Box>
        )
    }
}

export default DataVisualizer
