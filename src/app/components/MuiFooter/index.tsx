import React from 'react';
import { Box, Typography, Stack, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: 'white',
        padding: '20px 0',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ flexWrap: 'wrap' }}
      >
        <Typography variant="body2" component="p">
          &copy; 2024 Your Company
        </Typography>
        <Link href="/privacy" color="inherit" variant="body2">
          Privacy Policy
        </Link>
        <Link href="/terms" color="inherit" variant="body2">
          Terms of Service
        </Link>
      </Stack>
    </Box>
  );
};

export default Footer;
