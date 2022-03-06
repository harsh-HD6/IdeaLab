import React from 'react';
import { Typography ,Grid} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Colors from '../../colors/Colors';
import { CgCPlusPlus } from "react-icons/cg";
import { SiExpress,SiRedux,SiNextdotjs,SiMaterialui,SiBootstrap,SiHtml5,SiCss3,SiFirebase,SiJava,SiC } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import StackCard from './StackCard';



const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: '2em',
        paddingRight: '2em',
        paddingTop: '2em',
        paddingBottom: '10em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1em',
            paddingRight: '1em',
            paddingTop: '1em',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '0.5em',
            paddingRight: '0.5em',
            paddingTop: '0.5em',
        }
    },
}))
const icons = [
   
    DiJavascript1 ,
    DiMongodb,
    SiExpress,
    DiReact,
    DiNodejs,
    SiRedux,
    SiNextdotjs,
    SiFirebase,
    SiMaterialui,
    SiBootstrap,
    SiHtml5,
    SiCss3,
    SiC,
    CgCPlusPlus,
    DiPython,
    SiJava,

    
  ];

function TechStack(props) {
    const classes = useStyles();

    return (
      <Grid 
      container 
      direction='column' 
      alignItems='center' 
      justifyContent='center' 
      className={classes.rowContainer}
      >
      <Grid item style={{marginBottom:'1em'}}>
          <Typography  variant='h2' align='center' >
                Professional <span style={{color:Colors.blue}}>Skillset </span></Typography>
      </Grid>
      <Grid 
          item 
          container 
          direction= 'row'
          alignItems='center' 
          justifyContent='center' 
          spacing={4}
      >
          {icons && icons.map((doc,idx) =>(
                
                <Grid item  key={idx} >
                    <StackCard
                       icon={icons[idx]} 
                   />
                </Grid>
            ))}      

      </Grid>
  </Grid>
    );
}

export default TechStack;

// <Grid container direction="column">
       
// <Grid
//   item
//   container
//   direction="row"
//   justify="center"
//   style={{ marginTop: "15em", marginBottom: "20em" }}
//   className={classes.rowContainer}
// >
//   <Grid
//     item
//     container
//     direction="column"
//     md
//     alignItems="center"
//     style={{ maxWidth: "40em" }}
//   >
//     <Grid item>
//       <Typography variant="h4">Save Energy</Typography>
//     </Grid>
//     <Grid item>
//       <img src={lightbulb} alt="lightbulb" />
//     </Grid>
//   </Grid>

//   <Grid
//     item
//     container
//     direction="column"
//     md
//     alignItems="center"
//     style={{
//       maxWidth: "40em",
//       marginTop: matchesSM ? "10em" : 0,
//       marginBottom: matchesSM ? "10em" : 0
//     }}
//   >
//     <Grid item>
//       <Typography variant="h4">Save Time</Typography>
//     </Grid>
//     <Grid item>
//       <img src={stopwatch} alt="stopwatch" />
//     </Grid>
//   </Grid>
//   <Grid
//     item
//     container
//     direction="column"
//     md
//     alignItems="center"
//     style={{ maxWidth: "40em" }}
//   >
//     <Grid item>
//       <Typography variant="h4">Save Money</Typography>
//     </Grid>
//     <Grid item>
//       <img src={cash} alt="cash" />
//     </Grid>
//   </Grid>
// </Grid>
// </Grid>