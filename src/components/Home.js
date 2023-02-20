import React, { useState } from 'react';
import pp7 from "../images/pp_7.jpg"
import bg1 from "../images/bg_1.jpg"
import { Typography } from '@mui/material';
import "../css/styles.css";
import { Box, Stack, ThemeProvider } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Card_info from './Card_info';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Home() {
    return (
    <>
      <Grid container >
        <Box style={{backgroundImage: `url(${bg1})`,backgroundSize: '100% auto', backgroundRepeat: 'no-repeat', height: "300vh", paddingTop: "50px", marginTop: '-30px'}} >
          <Stack direction={'row'} >
          <Grid xs={9} sx={{float: 'left'}}>
            <Box marginTop={8}>
            <ThemeProvider theme={theme}>
              <Typography variant='h2' sx={{fontWeight:'2rem', color:'white', textAlign:'center'}}> Swaraj Kothari </Typography>
              <Typography  variant='subtitle1' sx={{color:'white', textAlign:'center'}}> Data Analyst | Big Data Engineer | Front End Developer </Typography>
              <Typography variant='h6' sx={{ color:'white', textAlign:'center', textJustify:'inter-word'}} paddingY={4} paddingX={15}>Big Data Engineer proficient in data/application integration, data warehousing, data analysis. Good in applying machine learning algorithms to get much precise predictions. Experienced in python and spark for big data engineering, machine learning and data analysis.</Typography>
            </ThemeProvider>
            </Box>
          </Grid>
          <Grid xs={3} display={'flex'}>
            <Box marginTop={2}>
              <img class = "profile_image" src={pp7} alt="swaraj profile picture" />
            </Box>
          </Grid>
          </Stack>
        
        <Box sx={{marginTop: '40vh', marginLeft:'10vh'}}>
          <Typography variant='h4'> What I do</Typography>
          <Grid container spacing={2} sx={{marginTop: '5vh'}}>
            <Grid xs={6} >
              <Card_info title="📝  Big Data Engineering" description="Worked with pyspark and scala on several projects to handle big data files and tables on delta tables" />
            </Grid>
            <Grid xs={6}>
              <Card_info title="📊  Data Analytics" description="Worked with pyspark and scala on several projects to handle big data files and tables on delta tables" />
            </Grid>
            <Grid xs={6} >
              <Card_info title="💼  Machine Learning" description="Worked with pyspark and scala on several projects to handle big data files and tables on delta tables" />
            </Grid>
            <Grid xs={6}>
              <Card_info title="🖼️  Front End Developer" description="Worked with pyspark and scala on several projects to handle big data files and tables on delta tables" />
            </Grid>
          </Grid>
          </Box>
          </Box>
      </Grid>
    </>
    // <Box class="backgroundimg" style={{backgroundImage: `url(${bg1})`,backgroundSize: 'contain', backgroundRepeat: 'no-repeat', height: "300vh", paddingTop: "50px", margin: "0px 100px"}}>
    // {/* <img class = "background_image" src={bg2} alt="swaraj profile picture" height="100px" ></img> */}
    // <div className="container">
    //   <img class = "profile_image" src={pp7} alt="swaraj profile picture" ></img>
    //   <div class='description'>
    //     <Typography  variant='caption' sx={{fontSize:'15px', color:'white'}}> Data Analyst | Big Data Engineer | Front End Developer </Typography>
    //     <Typography variant='h5' sx={{fontSize:'30px', fontWeight:'2rem', color:'white'}}> Swaraj Kotahri </Typography>
    //     <Typography variant='body2' sx={{fontSize:'20px', color:'white'}}>Big Data Engineer proficient in data/application integration, data warehousing, data analysis. Good in applying machine learning algorithms to get much precise predictions. Experienced in python and spark for big data engineering, machine learning and data analysis.</Typography>
    //   </div>
    // </div>
    // </Box>
    )
}

export default Home;