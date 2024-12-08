import React, { useState } from 'react';
import { Box, Button, TextField, IconButton } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../features/chatbot/chatbotSlice';

interface ChatInputProps {
    onFileChange: (file: File | null) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onFileChange }) => {
    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState('');

    const handleSend = () => {
        if (!userInput.trim()) return; // Prevent sending empty messages
        dispatch(addMessage({ user: userInput, bot: "Generating response..." })); // Placeholder for bot response
        setUserInput('');
        // Simulate API response after a delay (replace with actual API call)
        setTimeout(() => {
            const botResponse = "This is the bot's response to: " + userInput; // Placeholder for bot response
            dispatch(addMessage({ user: userInput, bot: botResponse }));
        }, 2000);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSend();
        }
    };

    const handleMicClick = () => {
        // Implement mic recording logic here
        console.log("Start recording...");
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', padding: 1, borderTop: '1px solid #ccc', backgroundColor: '#fff' }}>
            <TextField
                variant="outlined"
                fullWidth
                placeholder="Type your message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
                multiline
                maxRows={3} // Limit the height of the input area
                sx={{ mr: 1 }}
            />
            <IconButton color="primary" onClick={handleMicClick} sx={{ marginRight: 1 }}>
                <MicIcon />
            </IconButton>
            <IconButton color="primary" component="label" sx={{ marginRight: 1 }}>
                <AttachFileIcon />
                <input
                    type="file"
                    hidden
                    onChange={(event) => onFileChange(event.target.files ? event.target.files[0] : null)}
                />
            </IconButton>
            <Button variant="contained" color="primary" onClick={handleSend}>
                Send
            </Button>
        </Box>
    );
};

export default ChatInput;
