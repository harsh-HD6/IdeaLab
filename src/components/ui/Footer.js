import React , {useContext} from 'react'
import { AppBar , Toolbar ,Typography ,Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './styles.css';
import Colors from '../../colors/Colors';
import { useMediaQuery , useTheme} from '@mui/material';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiOutlineGoogle,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
  import { DarkThemeContext } from '../../context/DarkThemeContext';

const useStyles = makeStyles(theme=>({
    footer:{
        top:"auto",
        bottom:"0px",
        width: "100%",
        zIndex: 1302,
        position: "relative",
        borderTopWidth: 1, borderColor:Colors.blue,borderTopStyle: 'solid',
        paddingTop: 10,
        paddingBottom: 8
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
          paddingLeft: "1.5em",
          paddingRight: "1.5em"
        },
        [theme.breakpoints.down("xs")]: {
          paddingLeft: "1em",
          paddingRight: "1em"
        }
      },
    center:{
        margin:"0 auto"
    },
    mainContainer: {
        position: "absolute"
      },
    typography:{
        fontFamily:'sans-serif',
        textTransform:'none',
        fontWeight:700,
        fontSize:'1rem',  
    }
}))

export default function Footer() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const { dt} = useContext(DarkThemeContext)
    const [darkTheme] = dt;

    return (
        <div>
            <AppBar 
                className={classes.footer} 
                style={{ 
                        backgroundColor:darkTheme ? Colors.BDark : Colors.BWhite
                    }}
            >
                <Toolbar >
                    <Grid 
                        container 
                        direction={matchesMD ? 'column' :'row'} 
                        justifyContent="center"  
                        alignItems='center' 
                        className={classes.rowContainer}
                    >
                        <Grid item md={4} >
                            <Typography 
                                align='left' 
                                variant="body2" 
                                className={classes.typography}
                                style={{
                                    textAlign:'center',
                                    color:darkTheme?Colors.white :Colors.Black,
                                }}
                            >
                                Designed and Developed by Ritik Jain
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography 
                                align='center' 
                                className={classes.typography} 
                                variant="body2" 
                                style={{
                                    textAlign:'center',
                                    color:darkTheme?Colors.white :Colors.Black,
                                }}
                            >
                                {'Copyright © '} {' '}
                                {new Date().getFullYear()}
                                {' RJ'}
                            </Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Grid 
                                item 
                                container 
                                justifyContent='center' 
                                alignItems='center' 
                                spacing={2}
                            >
                                <Grid item>
                                <a
                                    href="https://github.com/ritik2727"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{color:darkTheme?Colors.white :Colors.Black}}
                                >
                                    <AiFillGithub  />
                                </a>
                                </Grid>
                                <Grid item>
                                <a
                                    href="https://twitter.com/Ritik2727"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{color:darkTheme?Colors.white :Colors.Black}}
                                >
                                    <AiOutlineTwitter />
                                </a>
                                </Grid>
                                <Grid item>
                                <a
                                    href='mailto:ritikjain2727@gmail.com'
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{color:darkTheme?Colors.white :Colors.Black}}
                                >
                                    <AiOutlineGoogle  /> 
                                </a>
                                </Grid>
                                <Grid item>
                                <a
                                    href="https://www.linkedin.com/in/ritik-jain-3b2208217"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{color:darkTheme?Colors.white :Colors.Black}}
                                >
                                    <FaLinkedinIn  /> 
                                </a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}