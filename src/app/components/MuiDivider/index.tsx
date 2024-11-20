
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  py: 1,
  width: '100%',
  borderColor: 'divider',
  padding: "10px",
};

export default function MuiDivider() {
  return (
    <List sx={style}>
      <Divider variant="middle" component="li" sx={{
          borderWidth: 2,  
          borderColor: "white",   
        }}  />
    </List>
  );
}