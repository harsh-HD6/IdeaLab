import React from 'react';
import { Grid,Typography,useMediaQuery,useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './ProjectCard.css.map'
import ecommerse from '../../assets/jpgtry.jpg';
import bankingrj from '../../assets/bankingrj.jpg';
import ngowf from '../../assets/ngowf.jpg';
import keepnotes from '../../assets/keepnotes.jpg';
import quizapp from '../../assets/quizapp.jpg';
import Done from '../../assets/done.jpg';

import ProjectCard from './ProjectCard';

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
    name: "E-commmerce website", 
    desc: "This is a Ecommmerce website build with react,firebase,ExpressJs,Stripe", 
    gitLink: 'https://github.com/ritik2727/ecommerce', 
    appLink: 'https://ecommerse-ritik2727.vercel.app/', 
    image: ecommerse
    },
    { 
      type: 'Website', 
      name: "NGO Website", 
      desc: "Website Payment integration using stripe in Donation website .Tech stack — ReactJS | Stripe | Material-UI .", 
      gitLink: 'https://github.com/ritik2727/Payment_integration',
       appLink: 'https://donation-two.vercel.app/', 
       image:ngowf
    },
    { 
      type: 'Website', 
      name: "Basic Banking Website", 
      desc: "This is a Basic Banking  website build with react,firebase",
       gitLink: 'https://github.com/ritik2727/BankingSystem', 
       appLink: 'https://banking-ritik2727.vercel.app/',
        image: bankingrj
    },
    { 
      type: 'Mobile App', 
      name: "DoneWithIt App", 
      desc: "This is a Mobile App build with React Native and NodeJs .",
       gitLink: 'https://github.com/ritik2727/DoneWithIt', 
       appLink: 'https://github.com/ritik2727/DoneWithIt',
        image: Done
    },
    { 
      type: 'Website', 
      name: "Quiz Game Website", 
      desc: "This is a Quiz Game Website build with ReactJs",
       gitLink: 'https://github.com/ritik2727/quiz-app', 
       appLink: 'https://quiz-app-op.herokuapp.com/',
        image: quizapp
    },
    { 
        type: 'Website', 
        name: "Keep Notes Website", 
        desc: "Notes Website with React, React Router and Redux",
         gitLink: 'https://github.com/ritik2727/note-app', 
         appLink: 'https://client-ritik2727.vercel.app/',
          image: keepnotes
      }
  ]

function Project(props) {
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
            <Typography  variant='h2' align='center' >Projects</Typography>
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
                  <ProjectCard 
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

export default Project;