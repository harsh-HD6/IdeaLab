import React from 'react';
import { Grid,Typography,useMediaQuery,useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './ProjectCard.css.map'
import ecommerse from '../../assets/jpgtry.jpg';

import EventCard from './EventCard';

import { AnimatedDiv } from '../animated';




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
const data = [
    { 
    type: 'Website', 
    name: "Ideation Workshop", 
    image: ecommerse
    },


  ]

function Events(props) {
    const theme = useTheme();
    const classes = useStyles();

    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  

    return (
        <AnimatedDiv  
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.3,type: 'spring' }}
        >
        <Grid 
        container 
        direction='column' 
        alignItems='center' 
        justifyContent='center' 
        className={classes.rowContainer}
        >
        <Grid item style={{marginBottom:'4em',marginTop:'4em'}}>
            <Typography  variant='h2' align='center' >Events</Typography>
        </Grid>
        <Grid 
            item 
            container 
            direction={matchesMD ? 'column' : 'row'}
            alignItems='center' 
            justifyContent='center' 
            spacing={4}
        >
            {data && data.map((item,id) =>(
                
                <Grid item key={id} style={{marginTop:'2em',marginBottom:'2em'}}  >
                  <EventCard 
                        key={item.name}
                        image={item.image} 
                        type={item.type} 
                        name={item.name} 
                        desc={item.desc} 
                        gitLink={item.gitLink}
                        appLink={item.appLink}
                    />       
                </Grid>
            ))}      
        </Grid>
    </Grid>
    </AnimatedDiv>
    );
}

export default Events;