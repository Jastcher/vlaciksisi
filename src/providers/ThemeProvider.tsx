import React, { ReactNode } from 'react'
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider as TP, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { green, purple } from '@mui/material/colors';
import { CssBaseline } from '@mui/material/';
import { useState } from 'react'; 
import state from '../components/NavBar';


const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ff5252',
      },
    },
  });  



export default function ThemeProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const theme = state ? lightTheme : darkTheme;

    

    return (
      <TP theme={theme}>
        <CssBaseline/>
        {children}
        </TP>
    )
  }