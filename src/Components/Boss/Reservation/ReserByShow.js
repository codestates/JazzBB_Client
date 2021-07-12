import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from "react-redux";


const columns = [
  { id: 'date', label: '공연날짜', minWidth: 170 },
  { id: 'time', label: '꽁연시간', minWidth: 100 },
  {
    id: 'num',
    label: '예약번호',
    minWidth: 70,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'name',
    label: '이름',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'people',
    label: '인원',
    minWidth: 80,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'mobile',
    label: '연락처',
    minWidth: 140,
    align: 'right',
    format: (value) => value.toFixed(2),
  },

  {
    id: 'confirm',
    label: '승인상태',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

// function createData(name,num, people, confirm, mobile,date, time) {
    
//   const density = population / size;
//   return { name, code, population, size, density };
// }

const rows = [
    {name : "",num : "", people : "", confirm : "", mobile : "",date : "", time : "" }
  
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
// const [rows, setRows] = React.useState([])

const BossState = useSelector((state) => state.reducer.reservation);
BossState.map(el => {
    const {name, num, people, confirm, mobile,  show : {date, time} } = el
    rows.map(row => {
        if(row.num !== num){
           rows.push({name,num, people, confirm, mobile,date, time })
        }})
   
})

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}