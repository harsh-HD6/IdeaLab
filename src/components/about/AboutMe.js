import React from 'react';
import { Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
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
      transition={{ duration: 0.3, type: 'spring' }}
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
          <Grid item container direction="column" sm style={{ maxWidth: "40em" }}>
            <Grid item>
              <Typography
                align='center'
                variant="h4"
                gutterBottom
              >
                What  <span style={{ color: Colors.blue }}>We're</span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align='center'
                paragraph
                style={{ fontWeight: 'bold', fontSize: '1.2em' }}
              >
                <span style={{ color: Colors.blue }}>IDEA Lab</span> .
                will provide all facilities under one roof, for conversion of an idea into a prototype. The idea
                need not always be new but the emphasis would be on graduating engineers working with their
                hands using equipment, tools and consumables. The focus will be on training students so that they
                become imaginative and creative and stay so at the workplaces they join.
              </Typography>
            </Grid>

          </Grid>

          <Grid item>
            <Grid item container justifyContent="center" alignContent='center' md>
              <img
                src={about}
                alt="quill pen sitting on top of book"
                style={{ maxWidth: matchesSM ? 270 : "30em", margin: 0 }}
              />
            </Grid>
          </Grid>
        </Grid>



        <Grid item>
          <Typography
            align='center'
            variant="h4"
            gutterBottom
          >
            Our  <span style={{ color: Colors.blue }}>Mission </span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align='center'
            paragraph
            style={{ fontWeight: 'bold', fontSize: '1.2em', paddingLeft: '6em',paddingRight: '6em' }}
          >
            <span style={{ color: Colors.blue }}> We at LNCT </span>
            , believe our first responsibility is to the
            students & their parents in meeting their needs
            everything we do must be of high quality. We must
            constantly strive to improve our standards. New
            equipment must be purchased and new facilities
            provided Research must be carried on, innovative
            ideas developed and industries collaborated with.
            <br />
            <br />
            <br />
            <div style={{ alignItems: "center", textAlign: 'left', textSizeAdjust: '1em',paddingLeft: '3em',paddingRight:'3em'}}>
              <span>
                1.  To improve continually in the teaching learning process by strengthening
                infrastructural facilities and faculty
                credentials.
                <br />
                2.  To undertake interdisciplinary research
                and development by engaging the
                faculty and students in curricular, cocurricular and industry collaborated
                projects towards problem-solving.
                <br />
                3.  To enhance the proportion of skilled based courses beyond the curriculum to
                create more employable graduates.
                <br />
              </span>
            </div>
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems="center"
          className={classes.rowContainer}
          style={{ marginTop: '5em', marginBottom: "2em" }}
          justifyContent="center"
        >
                   <Grid item>
            <Grid item container justifyContent="center" alignContent='center' md>
              <img
                src={about}
                alt="quill pen sitting on top of book"
                style={{ maxWidth: matchesSM ? 270 : "30em", margin: 0 }}
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" sm style={{ maxWidth: "40em" }}>
            
            <Grid item>
              <Typography
                align='center'
                variant="h4"
                gutterBottom
              >
                Our  <span style={{ color: Colors.blue }}>Role</span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align='center'
                paragraph
                style={{ fontWeight: 'bold', fontSize: '1.2em' }}
              >
                <span style={{ color: Colors.blue }}>To inspire</span> .
                 and provide the young scientists of
India with the required infrastructure to
convert their dreams into reality.
With the commitment of “Working Towards
Being the Best”, LNCT is positive to provide
students with state of art infrastructure to
facilitate students in being their best selves
and excel in the research field.

              </Typography>
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
          {/* <Education /> */}
        </Grid>
        <Grid item>
          {/* <Experiences /> */}
        </Grid>
      </Grid>

    </AnimatedDiv >
  );
}

export default AboutMe