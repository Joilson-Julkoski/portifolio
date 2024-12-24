import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
    typography: {
        fontFamily: '"Poppins", Arial, sans-serif',
      },
    
    palette: {
      primary: {
        main: '#FD853A', 
      },
      secondary: {
        main: '#272727', 
      },
      background: {
        main: '#171717', 
      },
      text: {
        main: '#E8E8E8'
      }
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'contained', color: 'primary' },
            style: {
              backgroundColor: '#FD853A',
              borderRadius: "50px",
              paddingLeft: "30px",
              paddingRight: "30px",
              color: '#E8E8E8', 
            },
          },
          {
            props: { variant: 'outlined', color: 'primary' },
            style: {
              border: '1px #E8E8E8 solid', // Red border for outlined buttons
              color: '#E8E8E8', // Red text for outlined buttons
              borderRadius: "50px",
              paddingLeft: "30px",
              paddingRight: "30px",
            },
          },
          {
            props: { variant: 'text', color: 'primary' },
            style: {
              borderColor: '#E8E8E8', // Red border for outlined buttons
              color: '#E8E8E8', // Red text for outlined buttons
              borderRadius: "50px",
              paddingLeft: "30px",
              paddingRight: "30px",
            },
          },
          
        ],
      },
    },
  });
  

export default theme