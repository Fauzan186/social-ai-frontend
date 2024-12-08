// src/components/HeroSection.tsx
import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const HeroSection: React.FC = () => {
  const theme = useTheme();

  return (
    <section
      style={{
        padding: theme.spacing(15, 0), // Using theme.spacing for consistent padding
        backgroundColor: '#ad1a1d', // Background color
        color: 'white',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Main Heading with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant="h2"
            color="inherit"
            align="center"
            sx={{
              fontWeight: 700,
              fontSize: '3.5rem', // Slightly larger for better emphasis
              marginBottom: theme.spacing(2.5), // Consistent spacing
              fontFamily: theme.typography.h2.fontFamily, // Use font from theme
            }}
          >
            Empower Social Media with AI Automation
          </Typography>
        </motion.div>

        {/* Subheading with Social Media Icons and Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Typography
            variant="h5"
            color="inherit"
            align="center"
            paragraph
            sx={{
              fontWeight: 300,
              fontSize: '1.2rem',
              marginBottom: theme.spacing(5), // Consistent spacing
              lineHeight: 1.6, // Improved line height for better readability
              fontFamily: theme.typography.fontFamily, // Use Open Sans from theme
            }}
          >
            Effortlessly manage interactions on{' '}
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <FacebookIcon style={{ marginRight: '8px' }} fontSize="small" />
              Facebook
            </span>
            ,{' '}
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <InstagramIcon style={{ marginRight: '8px' }} fontSize="small" />
              Instagram
            </span>
            ,{' '}
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <TwitterIcon style={{ marginRight: '8px' }} fontSize="small" />
              X (Twitter)
            </span>
            ,{' '}
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <WhatsAppIcon style={{ marginRight: '8px' }} fontSize="small" />
              WhatsApp
            </span>
            , and more. Improve engagement, automate responses, and gain insights with ease.
          </Typography>
        </motion.div>

        {/* Button Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ marginTop: theme.spacing(4) }}
        >
          <Button
            component={RouterLink}
            to="/features"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              marginRight: theme.spacing(2),
              padding: theme.spacing(1.5, 5), // Optimized padding using theme.spacing
              fontSize: '16px',
              borderRadius: '30px',
              fontWeight: '600',
            }}
          >
            Learn More
          </Button>

          <Button
            component={RouterLink}
            to="/contact"
            variant="outlined"
            color="secondary"
            size="large"
            sx={{
              padding: theme.spacing(1.5, 5), // Optimized padding using theme.spacing
              fontSize: '16px',
              borderRadius: '30px',
              border: `2px solid ${theme.palette.primary.main}`, // Use primary color from theme
              fontWeight: '600',
            }}
          >
            Contact Us
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;
