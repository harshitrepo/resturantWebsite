import { Table, TableContainer, Typography,Paper, TableHead ,TableRow,TableCell, TableBody} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:10 ,ml:10,"& h4":{
          fontWeight:'bold',
          mb:2,

        }}}>
          <Typography variant='h4'>
            Contact my Resturant
          </Typography>
          <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


          </p>
        </Box>
        <Box sx={{m:5,width:"600px",ml:10,"@media(max-width:600px)":{
          width:'300px',
        }}}>
          <TableContainer component={Paper}>
          <Table aria-label='contact table'>
          <TableHead>
            <TableRow>
              <TableCell sx={{bgcolor:'black',color:'white'}}align='center'>
              Contact Details

              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <SupportAgentIcon sx={{color:'red',pt:1,}}/>1800 76 7777 (TollFreeno)
                
               
              </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                <EmailIcon sx={{color:'skyblue',pt:1,}}/>Softmindresturant@gmail.com
                
               
              </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                <CallIcon sx={{color:'red',pt:1,}}/>6518167187 
                
                
              </TableCell>
              </TableRow>
            
          </TableBody>

          </Table>

          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact