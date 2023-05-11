import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ItemCount } from './ItemCount';

export const Item=({image,title,description,count}) =>{
  return (
    <Card  sx={{ m:5 ,maxWidth: 250,height:600 }}>
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
        <ItemCount count={count}/>
      </CardContent>
      <CardActions sx={{display:'flex',justifyContent:'center'}}>
        <Button variant='contained' size="small">Abrir Descripcion</Button>
      </CardActions>
    </Card>
  );
}