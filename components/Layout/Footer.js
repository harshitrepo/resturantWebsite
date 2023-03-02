import React from 'react';
import {Box, Typography} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import { fontSize } from '@mui/system';
// import { MpRounded } from '@mui/icons-material';
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p:3 ,height:'100px',justifyContent:'center'}}
      >
        <Box 
          sx={{
            my: 1,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 1,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
    >
    <InstagramIcon/>
    <TwitterIcon/>
    <GitHubIcon/>
    <YouTubeIcon/>
    </Box>
    <Typography variant='h5' sx={{"@media(max-width:600px)":{
        fontSize:'1rem'
    }}}>
     All Right Reserved &copyright:Softmind Infotech
    </Typography>
    </Box>
        
    </>
  )
}

export default Footer