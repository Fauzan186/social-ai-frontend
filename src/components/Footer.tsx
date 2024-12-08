import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer: React.FC = () => (
  <Box sx={{ py: 4, backgroundColor: 'black', color: 'white' }}>
    <Container>
      <Typography variant="body2" align="center" gutterBottom>
        &copy; 2024 ZetaAI. All rights reserved.
      </Typography>
      <Box textAlign="center" mt={2}>
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>Facebook</Link>
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>Twitter</Link>
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>LinkedIn</Link>
      </Box>
    </Container>
  </Box>
);

export default Footer;
