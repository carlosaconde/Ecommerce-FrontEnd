import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, Link as RouterLink } from "react-router-dom";

export const Item=({id,image,title,count,price}) =>{
  return (
    <Card  sx={{ m:3,maxWidth: 250,height:450 }}>
      <CardMedia
        component="img"
        sx={{ width: 240 ,height: 240 ,backgroundSize:'contain'}}
        image={image}
        title={title}
       
      />
      <CardContent >
    
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         cantidad : {count}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         precio : ${price} 
        </Typography>
       
      </CardContent>
      <CardActions sx={{display:'flex',justifyContent:'center'}}>
        <Button variant='contained' size="small">
        <Link component={RouterLink} to={`/item/${id}`}>
                  ver detalle
                </Link>
        </Button>
      </CardActions>
    </Card>
  );
}