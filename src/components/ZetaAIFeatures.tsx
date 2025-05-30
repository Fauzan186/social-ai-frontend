import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import illustration1 from '../assets/zetaai_illustration_1_transparent.png';
import illustration2 from '../assets/zetaai_illustration_2_transparent.png';

const Bullet = ({ text }: { text: string }) => (
  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5 }}>
    <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 20, mt: '2px', mr: 1 }} />
    <Typography variant="body2" color="text.secondary">{text}</Typography>
  </Box>
);

const ZetaAIFeatures: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f4f6f8' }}>
      <Container>

        {/* Feature 1: AI for Social Media */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: { xs: 8, md: 10 } }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: 3,
                p: 3,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                src={illustration1}
                alt="AI Automation"
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Empower AI for Social Media
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              ZetaAI simplifies your social media workflow with smart automation tools:
            </Typography>
            <Bullet text="Auto-schedule posts across platforms" />
            <Bullet text="Generate intelligent captions and creatives" />
            <Bullet text="Maintain branding and consistency" />
            <Bullet text="Plan content calendars effortlessly" />
            <Bullet text="Save time with AI-based productivity tools" />
          </Grid>
        </Grid>

        {/* Feature 2: Integration */}
        <Grid container spacing={6} alignItems="center" flexDirection={{ xs: 'column', md: 'row-reverse' }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: 3,
                p: 3,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                src={illustration2}
                alt="Social Media Integration"
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Intelligent Integration
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Seamlessly connect and manage all your social platforms:
            </Typography>
            <Bullet text="Integrate with Instagram, Twitter, LinkedIn & more" />
            <Bullet text="AI-powered comment & message handling" />
            <Bullet text="Track engagement with real-time insights" />
            <Bullet text="Collaborate across teams easily" />
            <Bullet text="Export reports and analytics effortlessly" />
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default ZetaAIFeatures;
