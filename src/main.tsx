import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import the global CSS
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // The custom MUI theme
import store from './store'; // Import your Redux store
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
