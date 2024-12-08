
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface ChatbotState {
    messages: any;
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
        addMessage: (state, action: PayloadAction<any>) => {
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
