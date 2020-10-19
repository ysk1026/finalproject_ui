import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({

  background: '#B2BABB'   

  ,
  depositContext: {
    flex: 1,
  },
  
  poster: {
    width: '300px',
    height: '120px',
    borderRadius: '4px'
  }
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Top Movie</Title>
      <Typography component="p" variant="h4">
        <img className={classes.poster} src="https://images8.alphacoders.com/110/1106852.jpg" alt="img"/>
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 19 Oct, 2020
      </Typography>
      {/* <div> */}
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          View all
        </Link> */}
      {/* </div> */}
    </React.Fragment>
  );
}