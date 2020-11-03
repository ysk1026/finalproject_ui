import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import axios from 'axios';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BorderColorIcon from '@material-ui/icons/BorderColor';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Review() {
  // const [userId, setUserId] = useState('')
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   axios.get('http://localhost:8080/api/reviews')
  //   .then(res =>{
  //       alert('Movie list successfully loaded')
  //       setData(res.data)
  //   })
  //   .catch(e => {
  //       alert('Failed TT')
  //       throw(e)
  //   })
  // },[])
  // const [userId, setUserId] = useState('')
  const [movieId, setMovieId] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  // const [userId, setUserId] = useState('')
  // const [label, setLabel] = useState('')

  const write = () => {
    alert(`Title: ${title}, Content: ${content}, movie: ${movieId}`)
    axios.post(`http://localhost:8080/api/reviewpost`,{'title':title,
        'content': content, 'movie_id': movieId})
        .then(res => {
            console.log(res)
            alert(`WRITING SUCCESS`)
        })
        .catch(
            e => {
                alert(`Writing ${e}`)
            }
    )
  }

  const options = [
    {
        label: "Select Movie",
        value: "0",
      },
    {
      label: "Tenet",
      value: "1",
    },
    {
      label: "TV Show",
      value: "2",
    },
  ];

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <BorderColorIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          리뷰를 작성해주세요
        </Typography>
        {/* <div class="mb-3" style={{margin: '26px 0 0 0'}}>
                            <label htmlFor="title">Title  </label>
                            <input 
                                type="text" 
                                class="form-control" 
                                name="title" id="title" 
                                placeholder="Input Title" 
                                style={{width: '250px'}}
                                onChange={e=>setUserId(e.target.value)} />
                        </div> */}
        <div class="mb-3" style={{margin: '26px 0 0 0'}}>
                            {/* <label htmlFor="movieId">Movie</label> */}
                            <select value={movieId}
                                    style={{width: '250px', height: '60px'}} 
                                    onChange={e=>setMovieId(e.target.value)}>
                                {options.map(o=>(
                                    <option value={o.value}>{o.label}</option>
                                ))}
                            </select>
        </div>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="제목"
            onChange= {e => setTitle(e.target.value)}
          />
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="리뷰"
            type="password"
            id="password"
            autoComplete="current-password"
          /> */}
          <TextField
          id="outlined-multiline-static"
          label="리뷰"
          multiline
          required
          fullWidth
          rows={4}
          variant="outlined"
          onChange= {e => setContent(e.target.value)}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {write}
            // onClick = {submit}
          >
            등록
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            {/* <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

