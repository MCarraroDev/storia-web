import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { colors } from '../config/colors';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Timeline', path: '/timeline' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          key={item.path} 
          component={Link} 
          to={item.path}
          onClick={handleDrawerToggle}
          sx={{
            backgroundColor: location.pathname === item.path ? `${colors.secondary}20` : 'transparent',
            '&:hover': {
              backgroundColor: `${colors.secondary}40`,
            },
          }}
        >
          <ListItemText 
            primary={item.text}
            sx={{ color: colors.primary }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        sx={{ 
          backgroundColor: colors.paper,
          boxShadow: 1,
          borderBottom: `1px solid ${colors.secondary}20`
        }}
      >
        <Toolbar>
          <IconButton
            color="primary"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography 
            variant="h6" 
            component={Link} 
            to="/"
            sx={{ 
              flexGrow: 1,
              textDecoration: 'none',
              color: colors.primary,
              fontWeight: 500
            }}
          >
            Storia
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  mx: 1,
                  color: colors.primary,
                  backgroundColor: location.pathname === item.path ? `${colors.secondary}10` : 'transparent',
                  '&:hover': {
                    backgroundColor: `${colors.secondary}20`,
                  }
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
