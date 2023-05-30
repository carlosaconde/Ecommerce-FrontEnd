import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ItemCount } from './ItemCount';

export const ItemDetail=({imagen,nombre,descripcion,cantidad,precio}) =>{
  
  
  return (
    <Card  sx={{ m:5 ,maxWidth: 250,height:600 }}>
      <CardMedia
        component="img"
        sx={{ width: 240 ,height: 240 ,backgroundSize:'contain'}}
        image={imagen}
        title={nombre}
       
      />
      <CardContent >
    
        <Typography gutterBottom variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {descripcion}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         cantidad : {cantidad}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         precio : {precio}
        </Typography>
        <ItemCount count={cantidad}  />
      </CardContent>
      
    </Card>
  );
}