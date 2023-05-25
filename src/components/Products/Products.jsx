import React from 'react';
import {Grid} from '@mui/material';

import Product from './Product/Product';
import  productsStyle from './productsStyle';
 

const Products = ({ products }) => {
    const classes =  productsStyle();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify= "center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}

            </Grid>
         </main>
    )
   
}

export default Products ;