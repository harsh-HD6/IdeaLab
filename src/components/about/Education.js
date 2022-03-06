import React , {useContext} from 'react';
import { Typography ,Grid ,Button ,useTheme,useMediaQuery, Divider} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {motion} from 'framer-motion'
import Colors from '../../colors/Colors';
import { DarkThemeContext } from '../../context/DarkThemeContext';
import { AnimatedDiv } from '../animated';


const useStyles = makeStyles(theme => ({
    rowContainer: {
      paddingLeft: "7em",
      paddingRight: "7em",
      [theme.breakpoints.down("md")]: {
        paddingLeft: "2em",
        paddingRight: "2em"
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "1.5em",
        paddingRight: "1.5em"
      }
    },
    dividerU: {
        // Theme Color, or use css color in quote
        opacity:'100%',
    },
  }));

function Education(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const { dt} = useContext(DarkThemeContext)
    const [darkTheme] = dt;

  

    return (
      <Grid container direction="column"  >
      <Grid 
        item 
        container 
        direction="column"        
        style={{ maxWidth: "60em",marginBottom:'2em' }} 
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography
            align={matchesMD ? "center" : undefined}
            variant="h2"
            gutterBottom
          >
          Education
          </Typography>
        </Grid>
        <Grid item>   
          <Typography
            variant="body1"
            align={matchesMD ? "center" : undefined}
            paragraph
            style={{fontWeight:300}}
          >
            SVVV University
          <br/>
            Indore, India
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? "center" : undefined}
            paragraph
            style={{fontWeight:300}}
          >
            B.Tech in Computer Science of Engineering
          <br/>
          <span style={{fontSize:'0.8em',fontFamily:'sans-serif'}}>2019 – 2023</span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align={matchesMD ? "center" : undefined}
            paragraph
            style={{fontWeight:300}}
            >
             Want to know more? Go ahead download my resume.
          </Typography>
        </Grid>
         <Grid 
          item 
          container 
          alignItems={matchesMD ? "center" : undefined} 
          justifyContent={matchesMD ? "center" : undefined} 
          style={{marginTop:'1em',marginBottom:'2em'}}
          >
          <Grid item>
            <motion.div
                  style={{borderRadius:5}}
                  whileHover={{
                    scale: 1.2,
                    textShadow: `0px 0px 8px ${Colors.blue}`,
                    boxShadow: `0px 0px 8px ${Colors.blue}`,
                  }}
                >
              <Button 
                variant='outlined' 
                style={{borderColor:Colors.blue}}
                onClick={
                  ()=>window.open('https://drive.google.com/file/d/1pb4AgOyGnazra3Ga9oGC9ej34lN2WAja/view', '_blank')
                  }
              >
                <Typography style={{color:Colors.blue}}>
                    Resume
                </Typography>
              </Button>
            </motion.div>
          </Grid>
        </Grid>
        <Grid item>
          <AnimatedDiv
            style={{backgroundColor:Colors.blue,borderRadius:5}}
            whileHover={{ scale: 1.4, originX: 0,border:` 1.3px solid ${Colors.blue} `}}
            transition={{ type: 'spring', stiffness: 300 }}
          >
          <Divider 
              style={{ background:darkTheme?Colors.SubWhite :Colors.SubBlack}} 
              classes={{root:classes.dividerU}} 
          />
          </AnimatedDiv>
        </Grid>
      </Grid>
    </Grid>
    );
}

export default Education;