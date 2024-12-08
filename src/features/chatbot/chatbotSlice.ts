// src/features/chatbot/chatbotSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    name: string;
    profilePicture: string;
}

interface Message {
    id: string;
    user: User;
    text: string;
    language: string;
    file: File | null;
    timestamp: string;
}

interface ChatbotState {
    messages: Message[];
    currentLanguage: string; // Current selected language
}

const initialState: ChatbotState = {
    messages: [],
    currentLanguage: 'en', // Default language
};

const chatbotSlice = createSlice({
    name: 'chatbot',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<Message>) => {
            state.messages.push(action.payload);
        },
        setLanguage: (state, action: PayloadAction<string>) => {
            state.currentLanguage = action.payload;
        },
        // Add more reducers as needed
    },
});

export const { addMessage, setLanguage } = chatbotSlice.actions;

export default chatbotSlice.reducer;
