import { Rating } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function ProfileCard({product}) {
    // console.log('product',product)
 
 
  return (
    <Card className="p-3" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product?.url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
           <span style={{fontWeight:700}}>Size:</span> {product?.Size}
        </Typography> 
        <Typography variant="body1" color="text.secondary">
           <span style={{fontWeight:700}}>Price:</span> {product?.price} €
        </Typography>
        <Typography variant="body1" color="text.secondary">
           <span style={{fontWeight:700}}>State:</span> {product?.state}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'space-between'}}>
         <Rating name="read-only" value={product?.rating} readOnly />
        <Link to={`/product/${product?.productId}`} >
         <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
