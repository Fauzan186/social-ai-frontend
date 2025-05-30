import React, { useState } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, useMediaQuery } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import zetaiLogo from "../assets/zetaai_100px_with_10px_margin.png"; // Adjust as needed

const Header: React.FC<{ onNavigate?: (section: string) => void }> = ({
  onNavigate,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavigate = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#911209" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          {/* Logo */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img src={zetaiLogo} alt="ZetaAI Logo" style={{ height: "60px" }} />
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
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  <Box>
                    <List>
                      <ListItem
                        button
                        onClick={() => handleNavigate("features")}
                      >
                        <ListItemText primary="Features" />
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => handleNavigate("howItWorks")}
                      >
                        <ListItemText primary="How It Works" />
                      </ListItem>
                      <ListItem button onClick={() => handleNavigate("faqs")}>
                        <ListItemText primary="FAQs" />
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => handleNavigate("contact")}
                      >
                        <ListItemText primary="Contact" />
                      </ListItem>
                    </List>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      fullWidth
                      component={RouterLink}
                      to="/signin"
                      variant="outlined"
                      sx={{ mb: 1 }}
                    >
                      Sign In
                    </Button>
                    <Button
                      fullWidth
                      component={RouterLink}
                      to="/signup"
                      variant="contained"
                    >
                      Sign Up
                    </Button>
                  </Box>
                </Box>
              </Drawer>
            </>
          ) : (
            // Desktop: nav left, auth right
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                color="inherit"
                onClick={() => handleNavigate("features")}
              >
                Features
              </Button>
              <Button
                color="inherit"
                onClick={() => handleNavigate("howItWorks")}
              >
                How It Works
              </Button>
              <Button color="inherit" onClick={() => handleNavigate("faqs")}>
                FAQs
              </Button>
              <Button color="inherit" onClick={() => handleNavigate("contact")}>
                Contact
              </Button>
              <Button
                color="inherit"
                component={RouterLink}
                to="/signin"
                sx={{ ml: 4 }}
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                component={RouterLink}
                to="/signup"
                sx={{ backgroundColor: "white", color: "#911209", ml: 1 }}
              >
                Sign Up
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
