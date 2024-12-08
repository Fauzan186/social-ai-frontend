// src/components/FinalCTASection.tsx
import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const FinalCTASection: React.FC = () => {
  return (
    <section style={{ padding: '80px 0', backgroundColor: '#911209' }}>
      <Container>
        <Typography variant="h3" color="white" align="center" gutterBottom>
          Ready to Supercharge Your Social Media?
        </Typography>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button
            component={RouterLink}
            to="/signup"
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginRight: '10px' }}
          >
            Sign Up Now
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="secondary"
            size="small"
          >
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTASection;
