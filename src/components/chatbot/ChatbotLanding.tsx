import React from 'react';
import { Box, Typography, Stack, Paper, useTheme } from '@mui/material';
import ZetaAIBrainIcon from './ZetaAIBrainIcon'; // Adjust path accordingly

const sampleQueries = [
  'How can I schedule a post?',
  'What is engagement rate?',
  'Suggest hashtags for tech content',
];

interface ChatbotLandingProps {
  onQuerySelect: (query: string) => void;
}

const ChatbotLanding: React.FC<ChatbotLandingProps> = ({ onQuerySelect }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        color: 'primary.main',
        display: 'flex',
        gap: 4,
        p: 4,
      }}
      aria-label="Welcome screen for ZetaAI chatbot"
    >
      {/* Left side: Sample Queries */}
      <Box
        sx={{
          flex: 1,
          borderRight: `1px solid ${theme.palette.divider}`,
          pr: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxHeight: 600,
          overflowY: 'auto',
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          color="text.primary"
          sx={{ letterSpacing: 0.3 }}
        >
          Try asking:
        </Typography>

        <Stack spacing={2} padding={2}>
          {sampleQueries.map((query) => (
            <Paper
              key={query}
              elevation={3}
              onClick={() => onQuerySelect(query)}
              sx={{
                p: 2,
                cursor: 'pointer',
                userSelect: 'none',
                color: theme.palette.primary.dark,
                fontWeight: 600,
                borderRadius: 3,
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: `0 2px 5px ${theme.palette.primary.dark}25`, // 15% opacity
                '&:hover': {
                  backgroundColor: theme.palette.primary.light,
                  boxShadow: `0 8px 20px ${theme.palette.primary.light}40`, // 25% opacity, smoother and softer shadow
                  transform: 'translateY(-3px)',
                  color: theme.palette.common.white,
                },
                textAlign: 'left',
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onQuerySelect(query);
              }}
              aria-label={`Ask: ${query}`}
            >
              {query}
            </Paper>
          ))}
        </Stack>
      </Box>

      {/* Right side: Welcome & Icon */}
      <Box
        sx={{
          flex: 1,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          maxHeight: 600,
          overflowY: 'auto',
          px: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={900}
          sx={{ letterSpacing: 1,  mb: 1, textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}
          color="primary.main"
        >
          Welcome to ZetaAI
        </Typography>

        

        <ZetaAIBrainIcon size={180} />

        <Typography
          variant="subtitle1"
          fontWeight={600}
          color="text.secondary"
          sx={{ mt: 3, lineHeight: 1.5 }}
        >
          Automate your posts, analyze engagement, and discover the best hashtags to boost your social media presence.
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatbotLanding;
