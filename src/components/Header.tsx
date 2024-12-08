// src/components/Header.tsx

import React, { useRef } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: React.FC<{ onNavigate: (section: string) => void }> = ({ onNavigate }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#911209' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          ZetaAI
        </Typography>
        <Button color="inherit" onClick={() => onNavigate('features')}>
          Features
        </Button>
        <Button color="inherit" onClick={() => onNavigate('howItWorks')}>
          How It Works
        </Button>
        <Button color="inherit" onClick={() => onNavigate('faqs')}>
          FAQs
        </Button>
        <Button color="inherit" onClick={() => onNavigate('contact')}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
