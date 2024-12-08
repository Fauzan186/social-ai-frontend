import React from 'react';
import { Box, Typography, Container, TextField, Button, Paper } from '@mui/material';

const Contact: React.FC = () => (
  <Box sx={{ py: 8, backgroundColor: 'primary.main', color: 'white' }}>
    <Container>
      <Typography variant="h3" align="center" gutterBottom>Contact Us</Typography>
      <Paper sx={{ maxWidth: 600, margin: '0 auto', padding: 4 }}>
        <form>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            required
          />
          <Box textAlign="center" mt={2}>
            <Button variant="contained" color="primary" type="submit">
              Send Message
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  </Box>
);

export default Contact;
