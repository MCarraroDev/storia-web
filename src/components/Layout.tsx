import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: { xs: 2, md: 4 },
          backgroundColor: 'background.default'
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
