// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import chatbotReducer from './features/chatbot/chatbotSlice';
import authReducer from './features/common/authSlice';

const store = configureStore({
    reducer: {
        chatbot: chatbotReducer,
        auth: authReducer,
    },
});

export default store; // Default export
