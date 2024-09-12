import React, { useState } from 'react';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate authentication process
    if (email && password) {
      login('fake-token'); // handle real API login in future
      navigate('/'); // Redirect to the dashboard after login
    }
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minHeight: '100vh',
        maxWidth: '400px',
        margin: '0 auto',
        p: 4,
      }}
    >
      <Typography variant='h4' component='h1' gutterBottom>
        Login
      </Typography>

      {/* Email Field */}
      <TextField
        label='Email'
        variant='outlined'
        type='email'
        fullWidth
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin='normal'
      />

      {/* Password Field */}
      <TextField
        label='Password'
        variant='outlined'
        type='password'
        fullWidth
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin='normal'
      />

      {/* Remember Me Checkbox */}
      <FormControlLabel
        control={
          <Checkbox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            color='primary'
          />
        }
        label='Keep me logged in' // Adjusted copy for 'remember me'
      />

      {/* Login Button */}
      <Button
        variant='contained'
        color='primary'
        fullWidth
        onClick={handleLogin}
        sx={{ mt: 2 }} // Margin top for spacing
      >
        Login
      </Button>

      {/* Forgot Password Link */}
      <Box mt={2}>
        <Link href='#' underline='hover'>
          Forgot your password?
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
