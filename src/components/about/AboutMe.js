import React from 'react';
import { Typography ,Grid  ,useTheme,useMediaQuery} from '@mui/material';
import { makeStyles } from '@mui/styles';
import about from './../../assets/about.png'
import Colors from '../../colors/Colors';

import ToolStack from './ToolStack';
import Education from './Education';
import Experiences from '../experience/Experiences';
import TechStack from './TechStack';



// import { DarkThemeContext } from '../../context/DarkThemeContext';
import { AnimatedDiv } from '../animated';
const useStyles = makeStyles(theme => ({
    rowContainer: {
      paddingLeft: "5em",
      paddingRight: "5em",
      [theme.breakpoints.down("md")]: {
        paddingLeft: "2em",
        paddingRight: "2em"
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "1.5em",
        paddingRight: "1.5em"
      }
    },
  }));



function AboutMe(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    // const { dt} = useContext(DarkThemeContext)
    // const [darkTheme] = dt;

    return (
      <AnimatedDiv   
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.3,type: 'spring' }}
      >
        <Grid container direction="column" > 
          <Grid
            item
            container
            direction={matchesMD ? "column" : "row"}
            alignItems="center"
            className={classes.rowContainer}
            style={{ marginTop: '5em', marginBottom: "2em" }}
            justifyContent="center"
          >
            <Grid item container direction="column"  sm style={{ maxWidth: "40em" }}>
              <Grid item>
                <Typography
                  align='center'
                  variant="h4"
                  gutterBottom
                >
                  Know Who <span style={{color:Colors.blue}}>I'M</span>
              </Typography> 
              </Grid>
              <Grid item> 
                <Typography
                  variant="body1"
                  align='center'
                  paragraph
                  style={{fontWeight:'bold'}}
                >
                  Hi,I'm <span style={{color:Colors.blue}}>Ritik Jain</span> . 
                  A passionate Full Stack Web and  Mobile Developer.
                  I am having an experience of building Web applications with 
                  JavaScript / Reactjs / Nodejs and 
                  some other cool libraries and frameworks.
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
            <Grid item container  justifyContent="center" alignContent='center' md>
              <img
                src={about}
                alt="quill pen sitting on top of book"
                style={{ maxWidth:matchesSM?270: "30em", margin: 0 }}
              />
            </Grid>
          </Grid>
          </Grid>
        <Grid item>
          <TechStack />
        </Grid>
        <Grid item>
          <ToolStack />
        </Grid>
        <Grid item>
          <Education />
        </Grid>
        <Grid item>
          <Experiences />
        </Grid> 
      </Grid>
    </AnimatedDiv>
    );
}

export default AboutMe;