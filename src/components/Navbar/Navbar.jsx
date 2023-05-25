import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Typography} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';


import logo from '../../assets/logo332.png';
import useStyles from './styles';

const Navbar=() => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color= "inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="CampusMarket" height="25px" className={classes.image} />
            CampusMarket
          </Typography>
          <div className={classes.grow}/> 
          <div className={classes.button}>
          <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2}></Badge>
                <ShoppingCart/>
            </IconButton>
          </div> 
        </Toolbar>
      </AppBar>
    </>
    
  )
}

export default Navbar;