// src/components/TestimonialsSection.tsx
import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

const TestimonialsSection: React.FC = () => {
  return (
    <section style={{ padding: '60px 0', backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h3" color="textPrimary" align="center" gutterBottom>
          What Our Customers Say
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center">
              <Typography variant="body1" color="textSecondary">
                "This chatbot has transformed how we interact with our customers. Easy setup and quick responses!"
              </Typography>
              <Typography variant="subtitle1" color="textPrimary">
                Jane Doe, CEO of XYZ Ltd.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center">
              <Typography variant="body1" color="textSecondary">
                "A fantastic tool for handling customer inquiries on social media. It saved us time and effort."
              </Typography>
              <Typography variant="subtitle1" color="textPrimary">
                John Smith, Marketing Manager at ABC Corp.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
