// src/components/HowItWorksSection.tsx
import React, { useState } from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { AccountCircle, UploadFile, Share, BarChart } from '@mui/icons-material';

const HowItWorksSection: React.FC = () => {
  // Define steps with additional information
  const steps = [
    {
      icon: <AccountCircle sx={{ fontSize: 40, color: '#911209' }} />,
      title: '1. Register Your Account',
      description: 'Sign up and log in to your personalized dashboard.',
      additionalInfo: 'Create an account to access all features and tools.',
    },
    {
      icon: <UploadFile sx={{ fontSize: 40, color: '#911209' }} />,
      title: '2. Upload Your Data',
      description: 'Provide relevant information to power the chatbot.',
      additionalInfo: 'Upload CSVs or JSON files to integrate your data securely.',
    },
    {
      icon: <Share sx={{ fontSize: 40, color: '#911209' }} />,
      title: '3. Integrate Social Media',
      description: 'Connect your Facebook, Instagram, X, and WhatsApp accounts.',
      additionalInfo: 'Effortlessly link your social platforms for seamless management.',
    },
    {
      icon: <BarChart sx={{ fontSize: 40, color: '#911209' }} />,
      title: '4. Launch and Monitor',
      description: 'Start responding to queries and monitor performance in real-time.',
      additionalInfo: 'Track user interactions and chatbot efficiency in real-time.',
    },
  ];

  return (
    <section>
      <Container>
        {/* Heading */}
        <Typography variant="h3" color="textPrimary" align="center"           sx={{ fontWeight: 700, marginBottom: 4 }}
        >
          How It Works
        </Typography>

        {/* Flow Steps Grid */}
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 3,
                  boxShadow: 3,
                  borderRadius: 2,
                  height: '100%',
                  textAlign: 'center',
                  position: 'relative',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  '&:hover .hoverContent': {
                    opacity: 1,
                  },
                }}
              >
                {/* Icon */}
                <Box>{step.icon}</Box>

                {/* Title */}
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  {step.title}
                </Typography>

                {/* Description */}
                <Typography color="textSecondary" className="defaultContent">
                  {step.description}
                </Typography>

                {/* Hidden Additional Info */}
                <Box
                  className="hoverContent"
                  sx={{
                    opacity: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 2,
                    borderRadius: 2,
                    transition: 'opacity 0.3s ease-in-out',
                  }}
                >
                  <Typography variant="h6" color="textPrimary">
                    {step.title}
                  </Typography>
                  <Typography color="textSecondary">{step.additionalInfo}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
