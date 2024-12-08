import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../features/chatbot/chatbotSlice';
import { Box, Typography, AppBar, Toolbar, Avatar, useTheme } from '@mui/material';
import ChatInput from './ChatInput';
import './Chatbot.scss'; // Import the SCSS file for custom styles

const initialQueries = [
    'What is your name?',
    'How can I contact support?',
    'Tell me a joke!',
];

const Chatbot: React.FC = () => {
    const dispatch = useDispatch();
    const messages = useSelector((state: any) => state.chatbot.messages);
    const [showSampleQueries, setShowSampleQueries] = useState(true);
    const [selectedQuery, setSelectedQuery] = useState('');
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const theme = useTheme(); // Access MUI theme

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const fetchBotResponse = async (query: string) => {
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer YOUR_API_KEY`, // Replace with your OpenAI API Key
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: query }],
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const botResponse = data.choices[0].message.content;

            // Dispatch bot response after receiving it
            dispatch(addMessage({ id: Date.now().toString(), user: null, text: botResponse, language: 'en', file: null, timestamp: new Date().toISOString() }));
        } catch (error) {
            console.error('Error fetching bot response:', error);
            // Optionally, handle the error in your UI
        }
    };

    useEffect(() => {
        if (selectedQuery) {
            const userMessage = {
                id: Date.now().toString(),
                user: { name: 'User', profilePicture: '' },
                text: selectedQuery,
                language: 'en',
                file: null,
                timestamp: new Date().toISOString(),
            };
            dispatch(addMessage(userMessage));
            setShowSampleQueries(false);
            dispatch(addMessage({ id: Date.now() + 1, user: null, text: "Generating response...", language: 'en', file: null, timestamp: new Date().toISOString() }));

            // Fetch bot response
            fetchBotResponse(selectedQuery);
        }
    }, [selectedQuery, dispatch]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <Box className="chatbot-container" sx={{ backgroundColor: theme.palette.background.default }}>
            <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Chatbot
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box className="chatbot-messages">
                {showSampleQueries ? (
                    <Box>
                        <Typography variant="h6" sx={{ mb: 2 }}>Sample Queries:</Typography>
                        {initialQueries.map((query, index) => (
                            <Box key={index} className="sample-query" onClick={() => setSelectedQuery(query)}>
                                {query}
                            </Box>
                        ))}
                    </Box>
                ) : (
                    messages.map((msg:any) => (
                        <Box key={msg.id} className="message-container">
                            {msg.user ? (
                                <Box className="user-message" sx={{ backgroundColor: theme.palette.background.paper }}>
                                    <Avatar className="avatar-user">U</Avatar>
                                    <Box className="message-text">{msg.text}</Box>
                                </Box>
                            ) : (
                                <Box className="bot-message" sx={{ backgroundColor: theme.palette.background.paper }}>
                                    <Avatar className="avatar-bot">B</Avatar>
                                    <Box className="message-text">{msg.text}</Box>
                                </Box>
                            )}
                        </Box>
                    ))
                )}
                <div ref={messagesEndRef} />
            </Box>
            <Box className="chat-input-container">
                <ChatInput onFileChange={()=>(query:any) => setSelectedQuery(query)} />
            </Box>
        </Box>
    );
};

export default Chatbot;
