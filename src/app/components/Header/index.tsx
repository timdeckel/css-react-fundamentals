import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#6b7280', color: 'black'  }}> 
      <Toolbar className="flex justify-between">
        <Link href="/" passHref>
          <Button color="inherit">HOME</Button>
        </Link>
        <Typography variant="body1" sx={{ ml: 2, color: 'black' }}>
          Click home to get to the start!
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
