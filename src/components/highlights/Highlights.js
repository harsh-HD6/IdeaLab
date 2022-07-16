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
import PIC1 from '../../assets/gallery/p1.jpeg'
import PIC2 from '../../assets/gallery/p2.jpeg'
import PIC3 from '../../assets/gallery/p3.jpeg'
import PIC4 from '../../assets/gallery/p4.jpeg'
import PIC5 from '../../assets/gallery/p5.jpeg'
import PIC6 from '../../assets/gallery/p6.jpeg'
import PIC7 from '../../assets/gallery/p7.jpeg'
import PIC8 from '../../assets/gallery/p8.jpg'
import PIC9 from '../../assets/gallery/p9.jpg'
import PIC10 from '../../assets/gallery/p10.jpg'
import PIC11 from '../../assets/gallery/p11.jpg'
import PIC12 from '../../assets/gallery/p12.jpg'
import PIC13 from '../../assets/gallery/p13.jpg'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

const data = [{
    src : PIC1,
    date : "hello",
    key : 0
},{
  src : PIC2,
  key : 0
},{
  src : PIC3,
  key : 0
},{
  src : PIC4,
  key : 0
},{
  src : PIC5,
  key : 0
},{
  src : PIC6,
  key : 0
},{
  src : PIC7,
  key : 0
},{
  src : PIC8,
  key : 0
},{
  src : PIC9,
  key : 0
},{
  src : PIC10,
  key : 0
},{
  src : PIC11,
  key : 0
},{
  src : PIC12,
  key : 0
},{
  src : PIC13,
  key : 0
}]
const  Highlights = ({name,desc,image,gitLink,appLink}) => {
    const theme = useTheme();
    const { dt} = useContext(DarkThemeContext)
    const [darkTheme] = dt;
    return (

<Grid container spacing={5} style={{justifyContent:'center'}}>
   
{data&&data.map((item,id)=>(
        <Grid item xs={4} md={4}>
        <Card sx={{ width: '100%' }}>
        <CardMedia
          component="img"
          height="440px"
          image={item.src}
          alt="green iguana"
        />
        {/* <CardContent>
          <Typography gutterBottom variant="h4" component="div"  color="text.primary" >
          {item.data}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign='center' fontFamily='gilroy' fontSize='20px'>
             {item.date}
          </Typography>
        </CardContent> */}
      </Card>
      </Grid>
     ))}


          </Grid>

    );
}

export default Highlights;