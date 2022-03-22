import { Grid } from '@mui/material';
import React,{useContext}  from 'react';
import { Typography , Button,useMediaQuery} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import programmer from "../../animation/programmer.json";
import Typewriter from 'typewriter-effect';
import SocialMediaIcon from '../ui/SocialMediaIcon';
import Skills from '../skills/Skills';
import Proficiency from '../skills/Proficiency';
import Colors from '../../colors/Colors';
import { Link } from 'react-router-dom';
import DisplayLottie from '../displayLottie/DisplayLottie'
import '../ui/styles.css'
import { AnimatedDiv } from '../animated';
import ecommerse from '../../assets/jpgtry.jpg';

//images import
import instrument from '../../assets/instrument.avif';
import ngowf from '../../assets/ngowf.jpg';
import c1 from '../../assets/a1.jpg'


import {DarkThemeContext} from '../../context/DarkThemeContext';
import FrontCard from '../projectmade/FrontCard'
import Ideapng  from '../../assets/idea.png'

const data = [
  { 
  type: 'Website', 
  name: "E-commmerce website", 
  desc: "AICTE | LAB ACTIVITIES", 
  gitLink: 'https://github.com/ritik2727/ecommerce', 
  appLink: 'https://ecommerse-ritik2727.vercel.app/', 
  image: c1
  },
  { 
    type: 'Website', 
    name: "MAJOR FACILITIES", 
    desc: "MAJOR FACILITIES", 
    gitLink: 'https://github.com/ritik2727/Payment_integration',
     appLink: 'https://donation-two.vercel.app/', 
     image:ngowf
  },
  { 
    type: 'Website', 
    name: "ELECTRICAL FACILITIES", 
    desc: "ELECTRICAL FACILITIES",
     gitLink: 'https://github.com/ritik2727/BankingSystem', 
     appLink: 'https://banking-ritik2727.vercel.app/',
      image: instrument
  },
  
]



const useStyles = makeStyles((theme,darkTheme) => ({
  // chabge
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
//   animation: {
//     maxWidth: "50em",
//     minWidth: "21em",
//     marginTop: "2em",
// // /    marginLeft: "10%",
//     [theme.breakpoints.down("sm")]: {
//       maxWidth: "30em"
//     }
//   },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor:Colors.blue,
    color:'#FFFFFF' ,
    borderRadius: 50,
    fontFamily:'Roboto',
    height: 45,
    width: 145,
    alignTextAlign: "center",
    lineHeight: "1.1em",
     textAlign: "center",
     fontSize:'1em',
    // marginRight: 40,
    "&:hover": {
      backgroundColor:Colors.blue
    },
    [theme.breakpoints.down("sm")]: {
      // marginRight: 20,
      width:110
    }
  },
  buttonContainer: {
    marginTop: "1em"
  },
  learnButtonHero: {
    
    ...theme.typography.learnButton,
    fontSize: "1rem",
    justifyContent: "center",
    lineHeight: "1.2em",

    backgroundColor: '#1976D2',
    color:'#FFFFFF' ,
    height: 45,
    width: 145,
    padding:'1em',

    "&:hover": {
      backgroundColor:Colors.blue
    },
    [theme.breakpoints.down("sm")]: {
      // marginRight: 20,
      width:110
    }
  },
  // learnButton: {
  //   ...theme.typography.learnButton,
  //   fontSize: "0.7rem",
  //   height: 35,
  //   padding: 5,
  //   [theme.breakpoints.down("sm")]: {
  //     marginBottom: "2em",
  //   }
  // },
  // mainContainer: {
  //   marginTop: "5em",
  //   [theme.breakpoints.down("md")]: {
  //     marginTop: "3em"
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     marginTop: "2em"
  //   }
  // },
  // heroTextContainer: {
  //   minWidth: "20em",
  //   marginLeft: "1em",
  //   [theme.breakpoints.down("xs")]: {
  //     marginLeft: 0
  //   }
  // },
  specialText: {
    fontFamily: 'sans-serif',
    color:'#1976D2'
  },
  // subtitle: {
  //   marginBottom: "1em"
  // },
  // icon: {
  //   marginLeft: "2em",
  //   [theme.breakpoints.down("xs")]: {
  //     marginLeft: 0
  //   }
  // },
  // serviceContainer: {
  //   marginTop: "12em",
  //   [theme.breakpoints.down("sm")]: {
  //     padding: 25
  //   }
  // },


  }));


function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { dt} = useContext(DarkThemeContext)
  const [darkTheme] = dt;
    return (
      <AnimatedDiv 
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.3,type: 'spring' }}
      >
      <Grid container direction='column'  >
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        justifyContent='center'
        className={classes.rowContainer}
        style={{ marginTop: "9em", marginBottom: "5em" }}
    >
      <Grid 
        item 
        container 
        direction="column"  
        justifyContent='center' 
        alignItems={matchesMD ? 'center' : undefined}
        md={7} style={{ maxWidth: "32em" }}
      >
        <Grid item>
            <Typography  variant="h3" align={matchesMD ? 'center' : undefined} >
          AICTE IDEA-LAB<span className="wave" style={{fontWeight:'normal'} }role="img" aria-labelledby="wave">👋🏻</span>
            </Typography>
            <Typography variant="h3"  >
             LNCT<span className={classes.specialText}></span>
            </Typography>
        </Grid> 
        <Grid item style={{marginTop:'2em',marginBottom:'2em'}}>
        <Typography variant={matchesSM ?'h4' : "h3"} style={{color:Colors.blue}} >
                <Typewriter
                options={{
                  strings: [
                    'MP`S first Idea Lab',
                    'LNCT BHOPAL'
               
                    ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed:50
                }}
              />
        </Typography>
        </Grid>
         <Grid item>
         <SocialMediaIcon />
         </Grid>
            <Grid
            item
            container
            justifyContent={matchesMD ? 'center' : undefined}
            className={classes.buttonContainer}
            spacing={3}
          >
            <Grid item>
            <AnimatedDiv
              style={{borderRadius:50}}
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: `0px 0px 8px ${Colors.blue}`,
              }}
              whileTap={{ scale: 0.9 }}
            >
                <Button
                className={classes.estimateButton}
                variant="contained"
                component={Link}
                to='/contact'
                onClick={() => props.setValue(5)}
              >
                
                Contribute Idea
              </Button>
            </AnimatedDiv>
            </Grid>
            <Grid item>
            <AnimatedDiv
              style={{borderRadius:50}}
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: `0px 0px 8px ${Colors.blue}`,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                className={classes.learnButtonHero}
                variant="contained"
                onClick={
               ()=>{console.log("hds")}
                }
              >
               Contribute Technology
              </Button>
              </AnimatedDiv>
            </Grid>
          </Grid>
    </Grid>
      <Grid item container justifyContent={matchesMD ? "center" : "flex-end"} md={5}>
        <img src={Ideapng} style={{height:'23em'}}></img>
      </Grid>
    </Grid>
    <Grid item>
      <Skills />
    </Grid>
    {/* <Proficiency /> */}
    {/* <ItemCards /> */}
    </Grid>
     <div style={{justifyContent: 'center',textAlign: 'center'}}>
       <Typography
              align={matchesMD ? "center" :'center'}
              variant="h1"
              style={{fontFamily: "Pacifico",fontSize:'4rem',paddingTop:'1.7em',
              paddingBottom:'0.3em',
              color:darkTheme?Colors.white :Colors.BDark,
            }}
              gutterBottom
              
            >
            Features
            </Typography></div>

    <Grid 
            item 
            container 
            direction={matchesMD ? 'column' : 'row'}
            alignItems='center' 
            justifyContent='center' 
            spacing={7}

        >
            {data && data.map((item,id) =>(
                
                <Grid item key={id} style={{marginTop:'2em',marginBottom:'2em'}}  >
                  <FrontCard 
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
  
    </AnimatedDiv>
    );
}

export default LandingPage;