// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#911209', // Primary color (dark red)
    },
    secondary: {
      main: '#FF5252', // Secondary color (lighter red)
    },
    background: {
      default: '#f5f5f5', // Background color for the page
    },
    text: {
      primary: '#333333', // Primary text color
      secondary: '#555555', // Secondary text color
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif', // Apply Open Sans globally
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontWeight: 300,
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded corners for the buttons
          padding: '10px 20px', // Consistent padding for all button sizes
          fontWeight: '600',
          textTransform: 'none', // Prevent text from being capitalized
        },
        containedPrimary: {
          backgroundColor: '#911209', // Solid primary color
          color: '#ffffff', // White text
          border: '1px solid #911209', // Primary color border
          '&:hover': {
            backgroundColor: '#ad1a1d', // Darker primary color on hover
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow on hover
          },
        },
        containedSecondary: {
          backgroundColor: '#ffffff', // White background for secondary button
          color: '#911209', // Primary color text
          border: '1px solid #7a0f10', // Darker shade of primary color for border
          '&:hover': {
            backgroundColor: '#911209', // Dark red background on hover
            color: '#ffffff', // White text on hover
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow on hover
          },
        },
        outlinedPrimary: {
          borderColor: '#911209', // Primary color border
          color: '#911209', // Primary text color
          '&:hover': {
            backgroundColor: '#9112091a', // Light background on hover
            borderColor: '#911209', // Keep border the same
            color: '#911209', // Text color stays primary on hover
          },
        },
        outlinedSecondary: {
          backgroundColor: '#ffffff', // White background for secondary button
          borderColor: '#7a0f10', // Darker shade of primary color for border
          color: '#911209', // Text color stays primary
          '&:hover': {
            backgroundColor: '#9112091a', // Light background on hover
            borderColor: '#7a0f10', // Keep darker border color
            color: '#911209', // Text color stays secondary on hover
          },
        },
        textPrimary: {
          color: '#911209', // Primary text button color
          '&:hover': {
            backgroundColor: '#9112091a', // Transparent background on hover
            color: '#911209', // Keep the text color the same
          },
        },
        textSecondary: {
          color: '#FF5252', // Secondary text button color
          '&:hover': {
            backgroundColor: '#FF52521a', // Transparent background on hover
            color: '#FF5252', // Keep the text color the same
          },
        },
      },
    },
  },
});

export default theme;
