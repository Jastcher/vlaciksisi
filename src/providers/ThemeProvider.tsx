import React, { ReactNode } from 'react'
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider as TP, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});


export default function ThemeProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {return (
      <TP theme={theme}>{children}</TP>
    )
  }