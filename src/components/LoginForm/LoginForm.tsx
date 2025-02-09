import React, { useState } from "react";
import Login from "../../assets/login.svg";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Link,
  CircularProgress,
  Alert,
} from "@mui/material";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  interface User {
    email: string;
    password: string;
    token: string;
    hasFeatureAccess: boolean;
  }

  // Mock user data
  const users: User[] = [
    {
      email: "vaishnavi@gmail.com",
      password: "password123",
      token: "mockAuthTokenWithAccess",
      hasFeatureAccess: true,
    },
    {
      email: "vaishnavi@divami.com",
      password: "password123",
      token: "mockAuthTokenWithoutAccess",
      hasFeatureAccess: false,
    },
  ];

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setTimeout(()=>{
        setError("");

        try {
          const user = users.find(
            (u) => u.email === email && u.password === password
          );
    
          if (user) {
            localStorage.setItem("authToken", user.token);
            localStorage.setItem("hasFeatureAccess", JSON.stringify(user.hasFeatureAccess));
            window.location.href = "/dashboard";
          } else {
            throw new Error("Invalid email or password");
          }
        } catch (err: unknown) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An unexpected error occurred");
          }
        } finally {
          setLoading(false);
        }
    },10000);
 
  }

  function onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <Box display="flex" sx={{ height: "100vh" }}>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Box sx={{ maxWidth: 400, width: "100%" }}>
          <Box mb={2}>
            <Typography variant="h4">Welcome back</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Welcome back! Please enter your details.
            </Typography>
          </Box>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={onEmailChange}
              value={email}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={onPasswordChange}
              value={password}
              required
            />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              {/* <Link href="#" underline="hover">
                Forgot password?
              </Link> */}
            </Box>
            <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
              {loading ? <CircularProgress size={24} /> : "Sign in"}
            </Button>
          </form>
          <Box mt={2} textAlign="center">
            {/* <Typography variant="body2">
              Don’t have an account? <Link href="#" underline="hover">Sign up for free!</Link>
            </Typography> */}
          </Box>
        </Box>
      </Box>
  
      {/* Image Container */}
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <img src={Login} alt="Login Illustration" style={{ maxWidth: "100%", height: "auto" }} />
      </Box>
    </Box>
  );
};

export default LoginForm;
