import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface BasicButtonsProps {
    onClick: () => void; 
  }

export default function BasicButtons({ onClick }: BasicButtonsProps) {

  return (
      <Button variant="contained" onClick={onClick} >Remove</Button>
  );
}