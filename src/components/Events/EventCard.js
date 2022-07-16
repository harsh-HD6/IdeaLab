import React,{useContext} from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { DarkThemeContext } from '../../context/DarkThemeContext';
import { useTheme,useMediaQuery } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import Colors from '../../colors/Colors';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

const data = [{
    data:"Ideation Workshop",
    date:"Start Date : 2021-12-31 | End Date : 2022-01-04",
    key : 0
},{
    data:"Skill Development Program on Laser Cutting and CNC Machining",
    date:"Start Date : 2022-05-04 | End Date : 2022-05-07",
    key : 0
},{
    data:"WORKSHOP ON PRECISION LASER CUTTING USING RDWORKS",
    date:"Start Date : 2022-06-13 | End Date : 2022-06-15",
    key : 0
}
,{
    data:"WORKSHOP ON TINKERCAD",
    date:"Start Date : 2022-06-15 | End Date : 2022-06-17",
    key : 0
},{
    data:"SKILLING PROGRAM ON RES DESIGN AND IMPLEMENTATION",
    date:"Start Date : 2022-06-29 | End Date : 2022-06-30",
    key : 0
},{
    data:"Internship on SMART & INTELLIGENT MANUFACTURING",
    date:"Start Date : 2022-07-01 | End Date : 2022-09-05",
    key : 0
},{
    data:"SCHOOL STUDENTS OPEN DAY ON SMART MANUFACTURING TECHNIQUES",
    date:"Start Date : 2022-07-04 | End Date : 2022-07-04",
    key : 0
}]
const  EventCard = ({name,desc,image,gitLink,appLink}) => {
    const theme = useTheme();
    const { dt} = useContext(DarkThemeContext)
    const [darkTheme] = dt;
    return (

<Grid container spacing={5} style={{justifyContent:'center'}}>
   
{data&&data.map((item,id)=>(
        <Grid item xs={2} md={4}>
        <Card sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          height="440"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1jiRRXl9R5mEx4vPcSO9mpsi3V9cDsznFaV1RDODU-HGLx3-ZYO1Qhdf2l_ZD6NBGNAo&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div"  color="text.primary" >
          {item.data}
          </Typography>
          <Typography variant="body2" color="text.secondary">
             {item.date}
          </Typography>
        </CardContent>

      </Card>
      </Grid>
     ))}


</Grid>

    );
}

export default EventCard