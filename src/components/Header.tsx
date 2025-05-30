import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme, useMediaQuery } from '@mui/material';
import zetaiLogo from '../assets/zetaai_100px_with_10px_margin.png'; // Adjust the path as necessary

const Header: React.FC<{ onNavigate: (section: string) => void }> = ({ onNavigate }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect screen size
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setDrawerOpen(false); // Close drawer on navigation
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#911209' }}>
        <Toolbar>
          
          <img src={zetaiLogo} alt="ZetaAI Logo"  style={{height:"60px"}} />
          
          {/* Conditional rendering based on screen size */}

          {isMobile ? (
            // Mobile view: Menu button and Drawer
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box
                  sx={{
                    width: 250,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <List>
                    <ListItem  onClick={() => handleNavigate('features')}>
                      <ListItemText primary="Features" />
                    </ListItem>
                    <ListItem  onClick={() => handleNavigate('howItWorks')}>
                      <ListItemText primary="How It Works" />
                    </ListItem>
                    <ListItem  onClick={() => handleNavigate('faqs')}>
                      <ListItemText primary="FAQs" />
                    </ListItem>
                    <ListItem  onClick={() => handleNavigate('contact')}>
                      <ListItemText primary="Contact" />
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            // Desktop view: Buttons
            <>
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
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
