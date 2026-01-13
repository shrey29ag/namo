import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';

const defaultTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#0A84FF', // iOS Blue to match new system
      },
      background: {
        default: '#0F0F11',
        paper: '#1C1C1E',
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.1)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.3)',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#0A84FF',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'rgba(255, 255, 255, 0.7)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
              borderRadius: '12px',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              padding: '12px',
          }
        }
      }
    },
  });
  
  export default function Authentication() {
  
      const [username, setUsername] = React.useState();
      const [password, setPassword] = React.useState();
      const [name, setName] = React.useState();
      const [error, setError] = React.useState();
      const [message, setMessage] = React.useState();
  
      const [formState, setFormState] = React.useState(0);
      const [open, setOpen] = React.useState(false)
  
      const { handleRegister, handleLogin } = React.useContext(AuthContext);
  
      let handleAuth = async () => {
          try {
              if (formState === 0) {
                  let result = await handleLogin(username, password)
              }
              if (formState === 1) {
                  let result = await handleRegister(name, username, password);
                  console.log(result);
                  setUsername("");
                  setMessage(result);
                  setOpen(true);
                  setError("")
                  setFormState(0)
                  setPassword("")
              }
          } catch (err) {
              console.log(err);
              let message = (err.response.data.message);
              setError(message);
          }
      }
  
      return (
          <ThemeProvider theme={defaultTheme}>
              <Grid container component="main" sx={{ height: '100vh', background: '#0F0F11' }}>
                  <CssBaseline />
                  <Grid
                      item
                      xs={false}
                      sm={4}
                      md={7}
                      sx={{
                          backgroundImage: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop)',
                          backgroundRepeat: 'no-repeat',
                          backgroundColor: (t) => t.palette.background.default,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                      }}
                  />
                  <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ 
                      background: '#1C1C1E', 
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center' 
                  }}>
                      <Box
                          sx={{
                              my: 8,
                              mx: 4,
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              width: '100%',
                          }}
                      >
                          <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 56, height: 56 }}>
                              <LockOutlinedIcon fontSize="large" />
                          </Avatar>
                          
                          <Typography component="h1" variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                              {formState === 0 ? "Welcome Back" : "Join Namo"}
                          </Typography>
  
                          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', background: 'rgba(255,255,255,0.05)', padding: '5px', borderRadius: '12px' }}>
                              <Button 
                                  variant={formState === 0 ? "contained" : "text"} 
                                  onClick={() => { setFormState(0) }}
                                  sx={{ borderRadius: '8px', minWidth: '120px' }}
                              >
                                  Sign In
                              </Button>
                              <Button 
                                  variant={formState === 1 ? "contained" : "text"} 
                                  onClick={() => { setFormState(1) }}
                                  sx={{ borderRadius: '8px', minWidth: '120px' }}
                              >
                                  Sign Up
                              </Button>
                          </div>
  
                          <Box component="form" noValidate sx={{ mt: 1, width: '100%', maxWidth: '400px' }}>
                              {formState === 1 ? <TextField
                                  margin="normal"
                                  required
                                  fullWidth
                                  id="name"
                                  label="Full Name"
                                  name="name"
                                  value={name}
                                  autoFocus
                                  onChange={(e) => setName(e.target.value)}
                                  sx={{ mb: 2 }}
                              /> : <></>}
  
                              <TextField
                                  margin="normal"
                                  required
                                  fullWidth
                                  id="username"
                                  label="Username"
                                  name="username"
                                  value={username}
                                  autoFocus={formState === 0}
                                  onChange={(e) => setUsername(e.target.value)}
                                  sx={{ mb: 2 }}
                              />
                              <TextField
                                  margin="normal"
                                  required
                                  fullWidth
                                  name="password"
                                  label="Password"
                                  value={password}
                                  type="password"
                                  onChange={(e) => setPassword(e.target.value)}
                                  id="password"
                                  sx={{ mb: 3 }}
                              />
  
                              <p style={{ color: "#FF453A", textAlign: 'center', minHeight: '24px' }}>{error}</p>
  
                              <Button
                                  type="button"
                                  fullWidth
                                  variant="contained"
                                  sx={{ mt: 2, mb: 2, py: 1.5, fontSize: '1.1rem' }}
                                  onClick={handleAuth}
                              >
                                  {formState === 0 ? "Login" : "Create Account"}
                              </Button>
  
                          </Box>
                      </Box>
                  </Grid>
              </Grid>
  
              <Snackbar
                  open={open}
                  autoHideDuration={4000}
                  message={message}
              />
  
          </ThemeProvider>
      );
  }