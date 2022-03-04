import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Controls from "../Controls/Controls";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm, Form } from '../FormMaterialUi/useForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './StudentSignup.css';
import Navigation from '../Shared/Navigation/Navigation';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))

const theme = createTheme();

const initialFValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

const StudentSignup = () => {
  const classes = useStyles()


  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('firstName' in fieldValues)
      temp.firstName = fieldValues.firstName ? "" : "This field is required."
    if ('lastName' in fieldValues)
      temp.lastName = fieldValues.lastName ? "" : "This field is required."
    if ('email' in fieldValues)
      temp.email = (/$^|.+@.+..+./).test(fieldValues.email) ? "" : "Email is not valid."
    if ('password' in fieldValues)
      temp.password = fieldValues.password.length >= 6 ? "" : "Password must be 6 or more than 6 character"
    setErrors({
      ...temp
    })

    if (fieldValues == values)
      return Object.values(temp).every(x => x == "")
  }

  const {
    values,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues, true, validate);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate()){
    const data = new FormData(e.currentTarget);

    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const email = data.get('email');
    const password = data.get('password');
    // const qualification = data.get('qualification');
    // const subject = data.get('subject');
    // const charge = data.get('charge');
    // const time = data.get('time');

    const user = {
      firstName, lastName, email, password, role: "student"
    }

    console.log(user);
    fetch('http://localhost:2000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      alert('Success');
      history.push('/');

     if (data.status === 200) {
        alert('Success');
        history.push('/');
        
      } else {
        if (data.status === 400) {
          console.log(data.error);
        }
      }
    })
    
    e.target.reset();
  }
  };
  return (
    <div className="container-std">
    <Navigation/>
    <ThemeProvider theme={theme}>
    <div component="main" maxWidth="xs">
      <CssBaseline />
      <Box
      className="container"
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#1dbf73' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className="mb-5">
          Student Sign up
        </Typography>
        <Form onSubmit={handleSubmit} className={classes.root} >
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Controls.Input
                name="firstName"
                label="First Name"
                value={values.firstName}
                onChange={handleInputChange}
                error={errors.firstName}
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.Input
                name="lastName"
                label="Last Name"
                value={values.lastName}
                onChange={handleInputChange}
                error={errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <Controls.Input
                label="Email"
                name="email"
                required
                value={values.email}
                onChange={handleInputChange}
                error={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <Controls.Input
                label="Password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
                error={errors.password}
              />
            </Grid>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ ml:3, mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="/log-in" variant="body2" style={{textDecoration: "none"}}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          </Grid>
          
        </Form>
      </Box>
    </div>
  </ThemeProvider>
  </div>
  );
};

export default StudentSignup;