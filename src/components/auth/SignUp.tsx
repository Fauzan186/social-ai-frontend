import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  Link,
  Paper,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Layout from "../Layout"; // Adjust if necessary

const SignUp: React.FC = () => {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, mt: 10, mb: 8 }}>
          <Typography variant="h5" gutterBottom align="center">
            Create Account
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
              name="name"
              autoComplete="name"
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              name="email"
              autoComplete="email"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              name="password"
              autoComplete="new-password"
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              margin="normal"
              name="confirmPassword"
              autoComplete="new-password"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-start">
              <Grid item>
                <Link component={RouterLink} to="/signin" variant="body2">
                  Already have an account? Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Layout>
  );
};

export default SignUp;
