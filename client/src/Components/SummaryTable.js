// @flow
import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { padding } from '../Theme'
import { Box, Heading } from 'rebass'
import LoadingSpinner from './LoadingSpinner'
import Error from './Error'

// types
import type { SummaryRow, IsLoading, HasErrored } from '../Types/summary'

type Props = {
    readableVariable: string,
    rows: Array<SummaryRow>,
    isLoading: IsLoading,
    hasErrored: HasErrored
}

const SummaryTable = (props: Props) => {
    const { readableVariable: variable, rows, isLoading, hasErrored } = props
    if (!variable) {
        return (
            <Box>
                <Heading fontSize={[6]} textAlign="center" p={padding.large} color="blue.1">
                    No Variable Selected
                </Heading>
            </Box>
        )
    }
    if (isLoading) {
        return (
            <Box>
                <LoadingSpinner />
            </Box>
        )
    }
    if (hasErrored) {
        return (
            <Box>
                <Error />
            </Box>
        )
    }
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{variable}</TableCell>
                        <TableCell align="right">Count</TableCell>
                        <TableCell align="right">Average Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.value}>
                            <TableCell component="th" scope="row">
                                {row.value}
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

export default SummaryTable
