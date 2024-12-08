// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import chatbotReducer from './features/chatbot/chatbotSlice';

const store = configureStore({
    reducer: {
        chatbot: chatbotReducer,
    },
});

export default store; // Default export
