import React , {useContext} from 'react';
import { Grid ,Fab } from '@mui/material';
import { useMediaQuery , useTheme} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DarkThemeContext } from '../../context/DarkThemeContext'
import Colors from '../../colors/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion';

import { faGithub ,faLinkedin,faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles(theme => ({
    icon:{
      color:Colors.blue,
    },
    fab:{
      "&:hover": {
        boxShadow:` 0 0 15px #1976D2 ` ,
        
      }
    }
}));
const icon = [
  {
    icon:faGithub,
    link:'https://github.com/piyushpp07'
  },
  {
    icon:faLinkedin,
    link:'https://www.linkedin.com/in/harsh-dhote-3a4a15196/'
  },
  {
    icon:faGoogle,
    link:'mailto:dhoteharsh5489@gmail.com'
  },
  {
    icon:faTwitter,
    link:'https://twitter.com/'
  }
]

function SocialMediaIcon(props) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { dt} = useContext(DarkThemeContext)
  const [darkTheme] = dt;
    const classes = useStyles();
    return (
    <>
      <Grid item container direction='row' spacing={2} >
      {icon && icon.map((doc,id) =>(
        <Grid item  key={id}>
          <motion.div
            style={{borderRadius:30}}
              whileHover={{
                  scale: 1.2,
                  boxShadow: "0px 0px 8px #1976D2",
              }}
            >
            <Fab 
            size={matchesSM ? 'small':'medium' } 
              aria-label="add" 
              style={{backgroundColor:darkTheme?Colors.Black :Colors.white}}
              className={classes.fab}
              >
            <FontAwesomeIcon 
              icon={doc.icon}
              className={classes.icon}
              size={matchesSM ? '1x' : '2x'}
              onClick={()=>window.open(doc.link, '_blank')}
            />
            </Fab>
          </motion.div>
        </Grid>
      ))}
      </Grid>
    </>
    );
}

export default SocialMediaIcon;


