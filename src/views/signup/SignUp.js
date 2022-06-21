import React from 'react'
import {Alert, Avatar, Button} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


const theme = createTheme();

export default function SignUp() {

    let navigate = useNavigate();

    const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  function redirect(){
    navigate('/friends')
  }

  
  return (
    
        <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        >

          {Object.keys(formErrors).length === 0 && isSubmit ? (
        <Alert className="ui message success">Signed in successfully <br/>
        <Button variant='outlined' onClick={()=> navigate('/')} >Homepage</Button>
        </Alert>
      ) : (
      //  "please fill the required data"
       <Alert severity="error">  "please fill the required data" </Alert>
      )}
    <ThemeProvider theme={theme} text-align="center">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login Form
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
            <TextField
                autoComplete="given-name"
                required
                fullWidth
                id="firstName"
                label="Username"
                autoFocus
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
                />
              </Grid>
              <Typography>{formErrors.username}</Typography>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </Grid>
              <Typography>{formErrors.email}</Typography>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </Grid>
             
            </Grid>
            <Typography>{formErrors.password}</Typography>
            {/* <Alert severity="error"> {formErrors.password}</Alert> */}

            {Object.keys(formErrors).length === 0 && isSubmit ? (
       
       navigate('/')
      ) : (
        <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        // onClick={() => navigate("/marketplace")}
      >
        Login
      </Button>
      )}

            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={() => navigate("/marketplace")}
            >
              Login
            </Button> */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
</Grid>
  );
}