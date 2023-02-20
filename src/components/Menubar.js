import React, { useState } from "react";
// import Navbar from "./Navbar";
import {Button,IconButton, Menu, MenuItem} from '@mui/material';
import {Link} from "react-router-dom";
import css_navbar from "../css/Navbar";
import { Box } from "@mui/system";
import plant from "./plant_data";

function Menulist(props) {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    return (
        <Box>
            <Button id={props.id} variant="contained" aria-controls={open ? props.id : undefined} aria-haspopup="true" onClick={handleClick}>{props.title}</Button>
            <Menu id={props.id} anchorEl={anchorEl} open={open} onClose={handleClose} >
                <MenuItem onClick={handleClose}> Profile </MenuItem>
                <MenuItem onClick={handleClose}> {props.title} </MenuItem>
            </Menu>
        </Box>
        // <Box>
        //     {plant.map((navItem, index) => {
        //         return <Box>
        //         <Button id={navItem.variety} key={navItem.id} variant="contained" aria-controls={open ? navItem.variety : undefined}
        //         aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>{navItem.variety}</Button>

        //         <Menu id={navItem.variety} anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{
        //             'aria-labelledby': navItem.variety }}>
        //             <MenuItem onClick={handleClose}> Profile </MenuItem>
        //             <MenuItem onClick={handleClose}> {navItem.type} </MenuItem>
        //         </Menu>
        //         </Box>
        //     })}
        // </Box>
    )

}

export default Menulist;