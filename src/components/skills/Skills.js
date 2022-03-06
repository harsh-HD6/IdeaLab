import { Grid,Typography,useMediaQuery , Hidden} from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import technologyAnimation from "../../animation/landingPageCoder.json";
import DisplayLottie from '../displayLottie/DisplayLottie';
import TechLab from '../../assets/TechLab.json'


const useStyles = makeStyles(theme => ({
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
    iconContainer: {
      "&:hover $icon": {
          color: '#1976D2',
      }
  },
    icon:{
      color:'#868E96',
        "&:hover":{
           color:'#1976D2'
       }
    }
  }));
  
 
  function Skills(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
   
  


    const Containerfirst = () =>{
      return(
      <Grid item sm style ={{paddingLeft:'110px'}} >
         <DisplayLottie    height={100}
        width={300}  animationData={TechLab} style={{ maxWidth: "32em", margin: 0,maxHeight: "32em"}} />
      </Grid>
      )
    }
    const ContainerSecond = () =>{
      return (
        <Grid item container direction="column" sm style={{ maxWidth: "40em" }}>
        <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="h3"
              style={{fontFamily: "Pacifico"}}
              gutterBottom
            >
            What We Do ?
            </Typography>
        </Grid>
         <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
  
            </Typography>
          </Grid>
          {/* <Grid item style={{marginBottom:'1em'}}>
            <SkillsIcon />
          </Grid> */}
          <Grid>   
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              Innovation distinguishes between a leader and a follower.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph

            >
              ⚡ LNCT in collaboration with AICTE is taking charge of the development of IdeaLab so as to help young minds in making their ideas become a reality and dreams come true.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              ⚡  LNCT is ready to welcome you all to a one-of-a-kind experience and take you on a learning journey where you get complete hands-on knowledge in the field of STEM (Science, Technology, Engineering, and Mathematics).
            </Typography>
          </Grid>
      </Grid>
      )
    }

    return (
      <Grid container direction="column"  id='skills' style={{marginTop:'2.4em'}}>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "2em" }}
      >
        <Hidden mdDown>
        <Containerfirst/>
        </Hidden>
     
        <ContainerSecond />
        <Hidden mdUp>
        <Containerfirst/>
        </Hidden>
      </Grid>
     </Grid>
    );
}

export default Skills;


