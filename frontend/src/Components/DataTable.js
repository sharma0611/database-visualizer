// @flow
import React, { Component } from 'react'
import { Flex, Box, Heading } from 'rebass'
import styled from 'styled-components'
import { padding, colors } from '../Theme'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const rows = [
    { id: 0, name: 'Ice cream sandwich', count: 91231, averageAge: 21 },
    { id: 0, name: 'Eclair', count: 91231, averageAge: 21 },
    { id: 0, name: 'Eclair', count: 91231, averageAge: 21 },
    { id: 0, name: 'Eclair', count: 91231, averageAge: 21 }
]

const PROPS = {
    selectedVariable: 'Education',
    rows
}

const SimpleTable = props => {
    const { selectedVariable, rows } = props
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{selectedVariable}</TableCell>
                        <TableCell align="right">Count</TableCell>
                        <TableCell align="right">Average Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.count}</TableCell>
                            <TableCell align="right">{row.averageAge}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}

class DataTable extends Component {
    render() {
        const { rows, selectedVariable } = PROPS
        return (
            <Box>
                <Heading fontSize={[6]} textAlign="center" p={padding.large} color="blue.1">
                    Summary
                </Heading>
                <Box mx={5} my={4}>
                    <SimpleTable {...{ rows, selectedVariable }} />
                </Box>
            </Box>
        )
    }
}

export default DataTable
