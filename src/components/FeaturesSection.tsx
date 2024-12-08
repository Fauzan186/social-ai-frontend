// src/components/FeaturesSection.tsx
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { AccessAlarm, Code, Dashboard, Lock } from '@mui/icons-material'; // Import icons

const FeaturesSection: React.FC = () => {
  return (
    <section style={{ padding: '60px 0', backgroundColor: '#f5f5f5' }}>
      <Container>
        {/* Heading with Button */}
        <Typography
          variant="h3"
          color="textPrimary"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, marginBottom: 4 }}
        >
          Why Choose Us?
        </Typography>

        {/* Features Grid */}
        <Grid container spacing={4} justifyContent="center">
          {/* Feature 1: Seamless Integration */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                boxShadow: 3,
                borderRadius: 2,
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
                transition: 'transform 0.3s ease-in-out',
                height: '100%', // Ensures all cards are equal height
              }}
            >
              <Box sx={{ fontSize: 40, color: '#911209' }}>
                <AccessAlarm /> {/* Icon */}
              </Box>
              <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  Seamless Integration
                </Typography>
                <Typography color="textSecondary">
                  Connect your social media platforms effortlessly.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 2: AI-Powered Responses */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                boxShadow: 3,
                borderRadius: 2,
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
                transition: 'transform 0.3s ease-in-out',
                height: '100%', // Ensures all cards are equal height
              }}
            >
              <Box sx={{ fontSize: 40, color: '#911209' }}>
                <Code /> {/* Icon */}
              </Box>
              <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  AI-Powered Responses
                </Typography>
                <Typography color="textSecondary">
                  Deliver accurate and engaging responses to your users.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 3: Real-Time Monitoring */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                boxShadow: 3,
                borderRadius: 2,
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
                transition: 'transform 0.3s ease-in-out',
                height: '100%', // Ensures all cards are equal height
              }}
            >
              <Box sx={{ fontSize: 40, color: '#911209' }}>
                <Dashboard /> {/* Icon */}
              </Box>
              <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  Real-Time Monitoring
                </Typography>
                <Typography color="textSecondary">
                  Track interactions and performance in one unified dashboard.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 4: Secure Data Handling */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                boxShadow: 3,
                borderRadius: 2,
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
                transition: 'transform 0.3s ease-in-out',
                height: '100%', // Ensures all cards are equal height
              }}
            >
              <Box sx={{ fontSize: 40, color: '#911209' }}>
                <Lock /> {/* Icon */}
              </Box>
              <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  Secure Data Handling
                </Typography>
                <Typography color="textSecondary">
                  Your data is safe with industry-standard security measures.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FeaturesSection;
