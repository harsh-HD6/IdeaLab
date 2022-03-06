import React,{useContext} from 'react';

import './ProjectCard.scss'
import './ProjectCard.css'
import './ProjectCard.css.map'
import {Typography } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import Colors from '../../colors/Colors';
import { DarkThemeContext } from '../../context/DarkThemeContext';
import { useTheme,useMediaQuery } from '@mui/material';





const  FrontCard = ({name,desc,image,gitLink,appLink}) => {
    const theme = useTheme();
   
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    const { dt} = useContext(DarkThemeContext)
    const [darkTheme] = dt;
  
    return (

        <div  className='card-wrapper'   style={{width:matchesSM?'15em' :'19em'}} >
                <div className="card" style={{
                  backgroundColor: `rgba(255, 255, 255)`, 
                  padding: '2em', elevation: '10em',
                overflow:' hidden'
                }}>
                    <div className="card-image">
                        <img src={image} alt={name}  />
                    </div>
                    {/* <div className='card-title'  style={{backgroundColor:Colors.blue}}>
                      <Typography align='center' variant='h5' 
                        style={{color:Colors.white.replace,
                                textAlign:'center',
                                paddingTop:'0.6rem',
                                paddingBottom:'0.6rem'
                                }}
                        >
                          {name}
                        </Typography>
                    </div> */}
                    
                    {/* <ul className="social-icons">
                        <li><a href={appLink}><PreviewIcon className='fa' /></a></li>
                        <li><a href={gitLink}><i className="fa fa-code"></i></a></li>
                    </ul> */}
                    <div className="details" style={{backgroundColor:darkTheme ? Colors.BDark : Colors.white}}>
                        {/* <h2>  */}
                        <Typography 
                        variant='h6'
                        style={{
                                marginTop:30,textAlign:'center',fontSize:'1.75rem',
                                paddingRight:'1em',paddingLeft:'1em',
                                color:darkTheme?Colors.white :Colors.BDark,
                                fontFamily:'Ubuntu',
                                fontWeight:'bold',
                                letterSpacing:2,
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

export default FrontCard;