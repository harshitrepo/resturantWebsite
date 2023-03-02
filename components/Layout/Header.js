import React,{useState} from 'react';
import {AppBar, Box, IconButton, Toolbar, Typography,Drawer, Divider} from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link,NavLink } from 'react-router-dom';
import "../../styles/HeaderStyles.css"
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  const [mobileopen,setMobileOpen]=useState(false);
  //handle menu click
  const handleDrawerToggle= ()=>{
    setMobileOpen(!mobileopen)
  }

  // menu drawer
const drawer =() => { 
<Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
    <Typography color={'goldenrod'} variant="h6" component="div" sx={{flexGrow:1,my:2}}>
      <FastfoodIcon/>
        My Resturant
      </Typography>
      {/* <Box sx={{display:{xs:'none', sm: 'block'}}}> */}
      <ul className='mobile-navigation'>
        <li>
        <Link to={'/'}>Home</Link>
        </li>
        <li>
        <Link to={'/Menu'}>Menu</Link>
        </li>
        <li>
        <Link to={'/Contact'}>Contact</Link>
        </li>
        <li>
        <Link to={'/About'}>About</Link>
        </li>
      </ul>

      {/* </Box> */}

    </Box>
}
  return (
    <>
    <Box>
    <AppBar component={'nav'} sx={{bgcolor:'black'}}>
    <Toolbar>
    <IconButton color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}>
    <MenuIcon/>

    </IconButton>
      <Typography color={'goldenrod'} variant="h6" component="div" sx={{flexGrow:1}}>
      <FastfoodIcon/>
        My Resturant
      </Typography>
      <Divider/>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
            
                  
        <li>
        <NavLink activeClassName="active" to={'/'}>Home</NavLink>
        </li>
        <li>
        <NavLink to={'/Menu'}>Menu</NavLink>
        </li>
        <li>
        <NavLink to={'/Contact'}>Contact</NavLink>
        </li>
        <li>
        <NavLink to={'/About'}>About</NavLink>
        </li>
      </ul>

      </Box>
      </Toolbar>
    </AppBar>
    <Box component="nav">
    {/* <Drawer variant="temporary" open="{mobileOpen}" onClose={handleDrawerToggle} sx={{display:{xs:'block',sm:'none'},"& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "200px",},}}
    onClick={handleDrawerToggle}> */}
      {drawer}
    
    </Box>
    <Box>
    <Toolbar/>
    </Box>

   
    </Box>
        
    </>
  )
}

export default Header;