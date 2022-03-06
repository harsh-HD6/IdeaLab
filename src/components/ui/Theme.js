import { createTheme, ThemeProvider, styled ,responsiveFontSizes} from '@mui/material';
import React,{ useContext,useState } from 'react';
import { DarkThemeContext } from '../../context/DarkThemeContext';



const arcBlue = '#FFFFFF';
const arcOrange = '#FFBA60';
const arcGrey ='#868686'



let theme = createTheme({
  palette: {
    common: {
      blue:arcBlue,
      orange: arcOrange
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange
    }
  },
  typography:{
      tab:{
        fontFamily:'Raleway',
        textTransform:'none',
        fontWeight:700,
        fontSize:'1rem',
        color:'white'
      },
      estimate:{
        fontFamily:'Pacifico',
        fontSize:'1rem',
        textTransform:'none',
        color:'white'
      },
      h2:{
        fontFamily:'Raleway',
        fontWeight:700,
        fontSize:'2.5rem',
        color:arcBlue,
        lineHeight:1.5
      },
      h3: {
        fontFamily: "Pacifico",
        fontSize: "2.5rem",
        color: arcBlue
      },
      h4:{
        fontFamily:'Raleway',
        fontSize:'1.75rem',
        color:arcBlue,
        fontWeight:700
      },
      h6: {
        fontWeight: 500,
        fontFamily: "Raleway",
        color: arcBlue,
        lineHeight:1
      },
      subtitle1:{
        fontSize:'1.25rem',
        fontWeight:300,
        color:arcGrey
      },
      subtitle2: {
        color: "white",
        fontWeight: 300,
        fontSize: "1.25rem"
      },
      body1: {
        fontSize: "1.25rem",
        color:'#868E96',
        fontWeight: 300
      },
      caption: {
        fontSize: "1rem",
        fontWeight: 300,
        color: arcGrey
      },
      learnButton: {
        borderColor: arcBlue,
        borderWidth: 2,
        textTransform: "none",
        color: arcBlue,
        borderRadius: 50,
        fontFamily: "Roboto",
        fontWeight: "bold"
      }
  },
  components :{
    MuiInputLabel:{
      styleOverrides:{
        root:{
          color:arcBlue,
          fontSize:'1rem'
        }
    }
    },
    MuiInput:{
      styleOverrides:{
      root: {
        color: arcGrey,
        fontWeight: 300
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcBlue}`
        }
      }
    }
  }
  }
})
 
const Theme = responsiveFontSizes(theme);

export default Theme;