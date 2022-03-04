import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Controls from "../Controls/Controls";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navigation from '../Shared/Navigation/Navigation';
import { useHistory, useLocation } from 'react-router-dom';
import './TeacherSignup.css';
import { PhotoCamera } from '@material-ui/icons';
import { useForm, Form } from '../FormMaterialUi/useForm';

const theme = createTheme();

const initialFValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  qualification: '',
  subject: '',
  charge: '',
  time: '',
  contact: '',
}

const TeacherSignup = () => {
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
    if ('qualification' in fieldValues)
      temp.qualification = fieldValues.qualification ? "" : "This field is required."
    if ('subject' in fieldValues)
      temp.subject = fieldValues.subject ? "" : "This field is required."
    if ('charge' in fieldValues)
      temp.charge = fieldValues.charge ? "" : "This field is required."
    if ('time' in fieldValues)
      temp.time = fieldValues.time ? "" : "This field is required."
    if ('contact' in fieldValues)
      temp.contact = fieldValues.contact.length === 11 ? "" : "Contact Number must be 11 digit."
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


  const [image, setImage] = React.useState("")
  const history = useHistory();

  const uploadImage = (files) => {
    const formData = new FormData()
    formData.append('file', files[0])
    formData.append('upload_preset', 'dyinef2d')

    return fetch('https://api.cloudinary.com/v1_1/nabihamaher/image/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => setImage(data.url))
  }
  console.log('image', image);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate()){
    const data = new FormData(e.currentTarget);

    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const email = data.get('email');
    const qualification = data.get('qualification');
    const subject = data.get('subject');
    const charge = data.get('charge');
    const time = data.get('time');
    const contact = data.get('contact');
    const password = data.get('password');

    const user = {
      firstName, lastName, email, password, qualification, subject, charge, time, contact, role: "teacher", profilePicture: image
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
    <div className="container-teacher">
      <Navigation />
      <ThemeProvider theme={theme}>
        <div component="main" maxWidth="l">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#1dbf73' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Teacher Sign up
            </Typography>
            <Box className="ml-md-5 mr-md-5" component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Controls.Input
                    autoComplete="fname"
                    name="firstName"
          
                    fullWidth
                    id="firstName"
                    label="First Name"
                    value={values.firstName}
                    onChange={handleInputChange}
                    error={errors.firstName}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Controls.Input
                    
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleInputChange}
                    error={errors.lastName}
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Controls.Input
                    
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleInputChange}
                    error={errors.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controls.Input
                    
                    fullWidth
                    id="qualification"
                    label="Qualification"
                    name="qualification"
                    autoComplete="qualification"
                    value={values.qualification}
                    onChange={handleInputChange}
                    error={errors.qualification}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField 
                    fullWidth
                    id="subject"
                    label="Which Subject Do You Want to Teach?"
                    name="subject"
                    autoComplete="subject"
                    value={values.subject}
                    onChange={handleInputChange}
                    error={errors.subject}
                    select>
                    <MenuItem value="Physics" >Physics</MenuItem>
                    <MenuItem value="Chemistry">Chemistry</MenuItem>
                    <MenuItem value="Higher-Math">Higher Math</MenuItem>
                    <MenuItem value="Biology">Biology</MenuItem>
                    <MenuItem value="General-Math">General Math</MenuItem>
                    <MenuItem value="General-Science">General Science</MenuItem>
                    <MenuItem value="ICT">ICT</MenuItem>
                    <MenuItem value="Economics">Economics</MenuItem>
                    <MenuItem value="Accounting">Accounting</MenuItem>
                    <MenuItem value="Finance">Finance</MenuItem>
                    <MenuItem value="Marketing">Marketing</MenuItem>
                    <MenuItem value="History">History</MenuItem>
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Geology">Geology</MenuItem>
                    <MenuItem value="Civics">Civics</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controls.Input
                    
                    fullWidth
                    id="charge"
                    label="Charge Per Lecture(in Taka)"
                    name="charge"
                    autoComplete="charge"
                    value={values.charge}
                    onChange={handleInputChange}
                    error={errors.charge}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controls.Input 
                    fullWidth
                    id="time"
                    label="Available Time"
                    defaultValue="10:00"
                    name="time"
                    type="time"
                    value={values.time}
                    onChange={handleInputChange}
                    error={errors.time}
                    autoComplete="time"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controls.Input
                    fullWidth
                    id="contact"
                    label="Contact Number"
                    name="contact"
                    value={values.contact}
                    onChange={handleInputChange}
                    error={errors.contact}
                    autoComplete="contact"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controls.Input
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={values.password}
                    onChange={handleInputChange}
                    error={errors.password}
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <PhotoCamera className="camera" />
                  <Button
                    containerElement='label'
                    label='My Label'>
                    <input type="file" onChange={(e) => {
                      uploadImage(e.target.files)
                    }} />
                  </Button>
                </Grid>
              </Grid>
              {image.length > 0 ? <Button
                style={{ margin: '30px auto 10px', display: "flex", width: " 300px" }}
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button> : ''}
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="/log-in" variant="body2" style={{ textDecoration: "none" }}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default TeacherSignup;