import React, { forwardRef, useEffect, useState } from 'react';
import {
  List,
  ListItem,
  Avatar,
  Paper,
  Typography,
  Tooltip,
  IconButton,
  Box,
} from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import FaceIcon from '@mui/icons-material/Face';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

interface Message {
  type: 'user' | 'bot';
  text: string;
}

interface ChatMessagesProps {
  messages: Message[];
  loading: boolean;
}

const TypingDots: React.FC = () => {
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((count) => (count >= 3 ? 1 : count + 1));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Typography variant="body1" sx={{ fontWeight: 500 }}>
      Typing{'.'.repeat(dotCount)}
    </Typography>
  );
};

const ChatMessages = forwardRef<HTMLDivElement, ChatMessagesProps>(({ messages, loading }, ref) => (
  <List>
    {messages.map((msg, index) => (
      <ListItem
        key={index}
        sx={{ justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start' }}
      >
        {msg.type === 'bot' && (
          <Avatar sx={{ bgcolor: '#e0e0e0', mr: 1 }}>
            <SmartToyIcon />
          </Avatar>
        )}
        <Paper
          sx={{
            p: 1.5,
            maxWidth: '70%',
            backgroundColor: msg.type === 'user' ? '#911209' : '#f0f0f0',
            color: msg.type === 'user' ? '#fff' : 'inherit',
            borderRadius: 2,
          }}
        >
          <Typography variant="body1">{msg.text}</Typography>
          {msg.type === 'bot' && (
            <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
              <Tooltip title="Like">
                <IconButton size="small" aria-label="like message">
                  <ThumbUpAltIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Dislike">
                <IconButton size="small" aria-label="dislike message">
                  <ThumbDownAltIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        </Paper>
        {msg.type === 'user' && (
          <Avatar sx={{ bgcolor: '#911209', ml: 1 }}>
            <FaceIcon />
          </Avatar>
        )}
      </ListItem>
    ))}
    {loading && (
      <ListItem>
        <Avatar sx={{ bgcolor: '#e0e0e0', mr: 1 }}>
          <SmartToyIcon />
        </Avatar>
        <Paper
          sx={{
            p: 1.5,
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            borderRadius: 2,
          }}
        >
          <TypingDots />
        </Paper>
      </ListItem>
    )}
    <div ref={ref} />
  </List>
));

export default ChatMessages;
