import React,{useContext} from 'react';

import './ProjectCard.scss'
import './ProjectCard.css'
import './ProjectCard.css.map'
import {Typography } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import Colors from '../../colors/Colors';
import { DarkThemeContext } from '../../context/DarkThemeContext';
import { useTheme,useMediaQuery } from '@mui/material';





const  ProjectCard = ({name,desc,image,gitLink,appLink}) => {
    const theme = useTheme();
   
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    const { dt} = useContext(DarkThemeContext)
    const [darkTheme] = dt;
  
    return (

        <div style={{width:matchesSM?'18.2em' :'25em'}} className='card-wrapper'>
                <div className="card" style={{
                  backgroundColor: `rgba(255, 255, 255, 0.1)`, 
                  padding: '2em', elevation: '10em',
                overflow:' hidden'
                }}>
                    <div className="card-image">
                        <img src={image} alt={name}  />
                    </div>
                    <div className='card-title'  style={{backgroundColor:Colors.blue}}>
                      <Typography align='center' variant='h5' 
                        style={{color:Colors.white.replace,
                                textAlign:'center',
                                paddingTop:'0.6rem',
                                paddingBottom:'0.6rem'
                                }}
                        >
                          {name}
                        </Typography>
                    </div>
                    
                    <ul className="social-icons">
                        <li><a href={appLink}><PreviewIcon className='fa' /></a></li>
                        <li><a href={gitLink}><i className="fa fa-code"></i></a></li>
                    </ul>
                    <div className="details" style={{backgroundColor:darkTheme ? Colors.white : Colors.BDark}}>
                        {/* <h2>  */}
                        <Typography 
                        variant='h6'
                        style={{
                                marginTop:30,textAlign:'center',fontSize:'1rem',
                                paddingRight:'1em',paddingLeft:'1em',
                                color:darkTheme?Colors.Black :Colors.white
                            }}
                         >
                        {desc}
                        </Typography>
                            {/* <span className="job-title">
</span> */}
                        
                    </div>
                </div>
                </div>
  
    )
}

export default ProjectCard;