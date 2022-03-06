import React from 'react';
import { Typography ,Grid} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Colors from '../../colors/Colors';
import {SiVisualstudiocode,SiPostman,SiVercel,SiHeroku,SiGit} from "react-icons/si";
import StackCard from './StackCard';



const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: '2em',
        paddingRight: '2em',
        paddingTop: '1em',
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
   
    SiVisualstudiocode,
    SiPostman,
    SiVercel,
    SiHeroku,
    SiGit
    
  ];

function ToolStack(props) {
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
           <span style={{color:Colors.blue}}>Tools</span> I use</Typography>
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
                
                <Grid item key={idx}  >
                   <StackCard
                       icon={icons[idx]} 
                   />
                </Grid>
            ))}      

      </Grid>
  </Grid>
    );
}

export default ToolStack;

