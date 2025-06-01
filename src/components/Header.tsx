// src/components/Header.tsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
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
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/common/authSlice';
import zetaiLogo from '../assets/zetaai_100px_with_10px_margin.png';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const authLinks = [
    { label: 'Chat', to: '/chat' },
    { label: 'Dashboard', to: '/dashboard' },
  ];

  const publicLinks = [
    { label: 'Sign In', to: '/signin' },
    { label: 'Sign Up', to: '/signup' },
  ];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#911209' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box
            component={NavLink}
            to="/"
            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          >
            <img src={zetaiLogo} alt="ZetaAI Logo" style={{ height: 60 }} />
          </Box>

          {isMobile ? (
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
                    justifyContent: 'space-between',
                    p: 2,
                  }}
                >
                  <Box>
                    <List>
                      {(isAuthenticated ? authLinks : publicLinks).map(({ label, to }) => (
                        <ListItem
                          key={label}
                          component={NavLink}
                          to={to}
                          onClick={() => setDrawerOpen(false)}
                          sx={{
                            '&.active': {
                              fontWeight: 'bold',
                              backgroundColor: '#fce8e6',
                            },
                          }}
                        >
                          <ListItemText primary={label} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  {isAuthenticated && (
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={() => {
                        dispatch(logout());
                        setDrawerOpen(false);
                      }}
                    >
                      Logout
                    </Button>
                  )}
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {(isAuthenticated ? authLinks : publicLinks).map(({ label, to }) => (
                <Button
                  key={label}
                  color="inherit"
                  component={NavLink}
                  to={to}
                  sx={{
                    textTransform: 'none',
                    '&.active': {
                      fontWeight: 'bold',
                      borderBottom: '2px solid #fff',
                    },
                  }}
                >
                  {label}
                </Button>
              ))}

              {isAuthenticated && (
                <Button
                  color="inherit"
                  onClick={() => dispatch(logout())}
                  sx={{ ml: 3, textTransform: 'none' }}
                >
                  Logout
                </Button>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
