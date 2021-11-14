import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, amount, date, type) {
    return { name, amount, date, type };
}

const DataTableFooter = function () {

    return (
        <div style={{ textAlign: 'center', margin: 10 }}>
            <Link href="/">View More</Link>
        </div>
    )
}


export default function DataTable() {

    const rows = [
        createData('Book Publish', 34, '2021-11-09', 'Cash'),
        createData('Book Publish', 34, '2021-11-09', 'Cash')
    ]

    return (
        <div style={{}}>
            <TableContainer component={Paper}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Payment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <DataTableFooter></DataTableFooter>
        </div>
    );
}
