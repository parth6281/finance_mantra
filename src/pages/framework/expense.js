import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';

function createData(Title, Place, Amount, Payment , Date) {
  return {Title, Place, Amount, Payment , Date };
}

const rows = [
  createData('Grocery', 'walmart', 30, 'online', '14-Nov-2021'),
  createData('Ice Cream', 'DQ', 9, 'Card', '14-Nov-2021'),

];


export default function DenseTableE() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650,marginBlock:20 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow  >
            <TableCell style={{fontWeight:'bold'}}>Title </TableCell>
            <TableCell style={{fontWeight:'bold'}}align="right">Place</TableCell>
            <TableCell style={{fontWeight:'bold'}} align="right">Amount</TableCell>
            <TableCell style={{fontWeight:'bold'}} align="right">Payment </TableCell>
            <TableCell  style={{fontWeight:'bold'}} align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Title}
              </TableCell>
              <TableCell align="right">{row.Place}</TableCell>
              <TableCell align="right">{row.Amount}</TableCell>
              <TableCell align="right">{row.Payment}</TableCell>
              <TableCell align="right">{row.Date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
