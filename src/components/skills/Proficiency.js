import { Grid,Typography,useMediaQuery , Hidden} from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import technologyAnimation from "../../animation/build.json";
import ProgressBar from '../skills/ProgressBar'
import DisplayLottie from '../displayLottie/DisplayLottie';

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
  
 
  function Proficiency(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    
const testData = [
    {title:'Frontend/Design', bgcolor: "#1976D2", completed: 85 },
    {title:'Backend', bgcolor: "#1976D2", completed: 70 },
    { title:'UI/UX Design',bgcolor: "#1976D2", completed: 60 },
    { title:'Programming',bgcolor: "#1976D2", completed: 60 },
    { title:'Mobile App',bgcolor: "#1976D2", completed: 70 },
  ];
  


    const Containerfirst = () =>{
      return(
      <Grid item sm>
        <DisplayLottie animationData={technologyAnimation} style={{ maxWidth: "40em", margin: 0 }} />
      </Grid>
      )
    }
    const ContainerSecond = () =>{
      return (
        <Grid item container direction="column" sm style={{ maxWidth: "48em",marginRight:matchesMD?0:'4em' }}>
        <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="h2"
              gutterBottom
            >
            Proficiency
            </Typography>
        </Grid>
        
        {testData.map((item, idx) => (
        <Grid item key={idx}>
        <ProgressBar  bgcolor={item.bgcolor} completed={item.completed} title={item.title} />
        </Grid>
      ))}
        
       

      </Grid>
      )
    }

    return (
      <Grid container direction="column">

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "1em" }}
      >
       
     
        <ContainerSecond />
        <Hidden lgDown>
        <Containerfirst/>
        </Hidden>
        {/* <Hidden mdUp>
        <Containerfirst/>
        </Hidden> */}
      </Grid>
     </Grid>
    );
}

export default Proficiency;


