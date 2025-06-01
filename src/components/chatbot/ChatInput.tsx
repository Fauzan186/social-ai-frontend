import React from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Tooltip,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  onSend: (text: string) => void;
  onMicClick: () => void;
  muted: boolean;
  toggleMute: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  input,
  setInput,
  onSend,
  onMicClick,
  muted,
  toggleMute,
}) => (
  <Box mt={2}>
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Ask me anything..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === 'Enter') onSend(input);
      }}
      InputProps={{
        sx: { borderRadius: 3 },
        endAdornment: (
          <InputAdornment position="end">
            <Tooltip title="Mic">
              <IconButton onClick={onMicClick}>
                <MicIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={muted ? 'Unmute' : 'Mute'}>
              <IconButton onClick={toggleMute}>
                {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
              </IconButton>
            </Tooltip>
            <Tooltip title="Send">
              <IconButton color="primary" onClick={() => onSend(input)}>
                <SendIcon />
              </IconButton>
            </Tooltip>
          </InputAdornment>
        ),
      }}
    />
  </Box>
);

export default ChatInput;
