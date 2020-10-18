import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import StarRateIcon from '@material-ui/icons/StarRate';
import StarHalfIcon from '@material-ui/icons/StarHalf';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Oct, 2020', 'Cheolll', '신과 함께', '재밌었다', <StarRateIcon/>),
  createData(1, '16 Oct, 2020', 'Marvelovea', '아이언맨3', 'Nice movie', <StarRateIcon/>),
  createData(2, '16 Oct, 2020', 'Kcineff', '부산행', '갈수록 애매한 느낌??', <StarRateIcon/>),
  createData(3, '16 Oct, 2020', 'Jee1024', '광해', '연기력 대박...', <StarRateIcon/>),
  createData(4, '15 Oct, 2020', 'Senqm', '아저씨', '완벽한 작품', <StarRateIcon/>),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Reviews</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>날짜</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>영화</TableCell>
            <TableCell>글</TableCell>
            <TableCell align="right">별점</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          더 많은 리뷰 보기
        </Link>
      </div>
    </React.Fragment>
  );
}