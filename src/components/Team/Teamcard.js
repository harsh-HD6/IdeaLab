import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TeamCard({image,desg,name}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <h3 style={{fontFamily:'gilroy'}}>{name}</h3>
        <Typography variant="body2" color="text.secondary">
        {desg}
        </Typography>
      </CardContent>
    </Card>
  );
}