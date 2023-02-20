import React, { useState } from "react";
import {AppBar, Button,IconButton, Menu, MenuItem, Stack, Toolbar} from '@mui/material';
import { Box } from "@mui/system";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Link, useNavigate } from "react-router-dom";
// import cover from '../images/cover_photos.jpg'

const Navbar = () => {
    const navigate = useNavigate();
    return (
    <AppBar position="static">
        <Toolbar sx={{backgroundColor:'#0A2647'}}>
            <Stack direction='row' spacing={2} >
                <Box sx={{height:'100', maxWidth:'200'}} >
                    {/* <img src={cover} alt="cover" width='200%' style={{margin:'auto'}}/> */}
                    <Button color='inherit' style={{display:'flex', flex:1, margin:'-20 100 50 100' , padding: '0 0 4px 0', textDecoration: 'none', color: 'white', fontSize:'18px', textTransform: 'none'}} onClick={() => (navigate("/"))} startIcon={<HomeRoundedIcon />} >
                        Home
                    </Button>
                </Box>
            </Stack>
        </Toolbar>
    </AppBar>
    )

}

export default Navbar;