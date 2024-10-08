"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import CottageIcon from '@mui/icons-material/Cottage';
import GroupIcon from '@mui/icons-material/Group';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Domov" icon={<CottageIcon />} />
        <BottomNavigationAction label="Profily" icon={<GroupIcon />} />
        <BottomNavigationAction label="Prispevky" icon={<LocalPostOfficeIcon />} />
        <BottomNavigationAction label="Prihlasenie" icon={<LoginIcon />} />
        <BottomNavigationAction label="Registracia" icon={<HowToRegIcon />} />

      </BottomNavigation>
    </Box>
  );
}