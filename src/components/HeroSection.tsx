// src/components/HeroSection.tsx
import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const HeroSection: React.FC<{ onNavigate: (section: string) => void }> = ({ onNavigate }) => {
  const theme = useTheme();

  return (
    <section
      style={{
        padding: theme.spacing(15, 0),
        backgroundColor: '#ad1a1d',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Main Heading */}
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
              fontSize: '3rem',
              marginBottom: theme.spacing(2),
            }}
          >
            Automate Your Business with <strong>AI Agents </strong>
          </Typography>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
              fontSize: '1.15rem',
              marginBottom: theme.spacing(5),
              lineHeight: 1.6,
            }}
          >
            Build intelligent <strong> Smart AI chatbots</strong>, <strong>RAG assistants</strong>, and <strong>automations</strong> to manage messages and workflows across:
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              flexWrap: 'wrap',
              fontSize: '1rem',
              fontWeight: 400,
              color: 'white',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <FacebookIcon fontSize="small" /> <strong>Facebook</strong>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <InstagramIcon fontSize="small" /> <strong>Instagram</strong>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TwitterIcon fontSize="small" /> <strong>X (Twitter)</strong>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <WhatsAppIcon fontSize="small" /> <strong>WhatsApp</strong>
            </Box>
          </Box>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ marginTop: theme.spacing(4) }}
        >
          <Button
            onClick={() => onNavigate('features')}
            variant="contained"
            color="primary"
            size="large"
            sx={{
              marginRight: theme.spacing(2),
              padding: theme.spacing(1.5, 5),
              fontSize: '16px',
              borderRadius: '30px',
              fontWeight: '600',
            }}
          >
            Explore AI Solutions
          </Button>

          <Button
            onClick={() => onNavigate('contact')}
            variant="outlined"
            color="secondary"
            size="large"
            sx={{
              padding: theme.spacing(1.5, 5),
              fontSize: '16px',
              borderRadius: '30px',
              border: `2px solid ${theme.palette.primary.main}`,
              fontWeight: '600',
            }}
          >
            Talk to an Expert
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;
