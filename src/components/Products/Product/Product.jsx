import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

import NewProstyle from './productStyles';

const Product = ({ product }) => {
  return (
    <NewProstyle>
    <Card>
      <CardMedia image={product.media.source} title={product.name} />
      <CardContent>
        <div>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {product.vendor}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
    </NewProstyle>
  );
};

export default NewProstyle(Product);
