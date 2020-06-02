import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import { useStyles } from '../shared/material-layout';
import TableContainer from '@material-ui/core/TableContainer';

export default function SimpleTable(props) {
  const classes = useStyles();
  let { options, records } = props;

  //render headings
  let tableHeading = options.columns.map(column => {
    return <TableCell key={column.heading}> {column.heading}</TableCell>

  })
  // render all records
  let tableRows = records.map(record => {
    return <TableRow key={record.id}>
      {options.columns.map(column => {
        return <TableCell key={column.heading} >
          {record[column.key]}
        </TableCell>
      })
      }</TableRow>

  });
  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeading}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
