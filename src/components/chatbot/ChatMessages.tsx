import React, { forwardRef } from 'react';
import {
  List,
  ListItem,
  Avatar,
  Paper,
  Typography,
  Tooltip,
  IconButton,
  Box,
  CircularProgress,
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
          }}
        >
          <Typography variant="body2">{msg.text}</Typography>
          {msg.type === 'bot' && (
            <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
              <Tooltip title="Like">
                <IconButton size="small">
                  <ThumbUpAltIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Dislike">
                <IconButton size="small">
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
        <Paper sx={{ p: 1.5, backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', gap: 1 }}>
          <CircularProgress size={16} />
          <Typography variant="body2">Typing...</Typography>
        </Paper>
      </ListItem>
    )}
    <div ref={ref} />
  </List>
));

export default ChatMessages;
