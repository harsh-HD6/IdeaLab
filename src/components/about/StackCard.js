import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Colors from '../../colors/Colors';
import { DarkThemeContext } from '../../context/DarkThemeContext';


import { AnimatedDiv } from '../animated';


export default function StackCard({title,icon,id}) {
    const { dt} = useContext(DarkThemeContext)
    const [darkTheme] = dt;
    const Icon =icon


  return (
        <AnimatedDiv
           style={{borderRadius:15}}
            whileHover={{
                scale: 1.2,
                boxShadow: "0px 0px 8px #1976D2",
            }}
            >
             <Box
                style={{padding:'1em'}}
                sx={{
                width: 70,
                height: 70,
                borderRadius:3,
                backgroundColor: 'transprant',
                border: `1.7px solid ${Colors.blue} !important`,
                boxShadow:` 0 8px 15px 0 #1976D2 ` ,
                overflow: `hidden !important`

                }}
            >
            <Icon style={{ width: 70,
                height: 70,
                color:darkTheme ? Colors.white : Colors.Black
                }} />
            </Box>
        </AnimatedDiv>
  );
}