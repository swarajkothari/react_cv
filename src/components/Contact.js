import React, { useState } from "react";
import {Button, InputAdornment, Paper, Stack, TextField, Typography} from '@mui/material';
// import {Button,IconButton} from '@mui/material';
// import {useNavigate,Link} from "react-router-dom";
// import plant from '../config/plant_data';
import { Box } from "@mui/system";
// import m900mm from "../images/rcc_900mmNP3.jpg";




function Contact() {

const [data, setData] = useState({});
const [state, setState] = useState();

const handleChange = (e) => {
    
    setData({
      ...data,
      [e.target.name]: e.target.value
    })

    // if (e.target.name=="phone") {
    //   const onlyNums = e.target.value.replace(/[^0-9]/g, '');

    //   (e.target.value.length === 10) ? setState({value: onlyNums}) : setState({value: onlyNums})
    //   }
    //   console.log(state)
  };

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(data)
  if (data.phone.length != 10  || !data.phone.match(/\d/)) {
      alert("please enter valid phone number")
      }
  
}

return (
<Box style={{backgroundColor: 'cyan',backgroundSize: "cover", height: "100vh", color: "#f5f5f5", paddingTop: "100px", margin: "-10px"}}>
    <Paper sx={{width: "40%", margin: 'auto', padding: '40px', backgroundColor: "#ECECEC"}}>
        <Stack spacing={3} sx={{margin: 'auto'}}>
          <Box style={{backgroundImage: `url(${m900mm})`}}>
            <Typography variant="h4"> Contact Us</Typography>
          </Box>
            <TextField label='Name' name="name" type="text" variant='outlined' onChange={handleChange} required />
            <TextField label='Phone' name="phone" type="tel" variant='outlined' onChange={handleChange}  InputProps={{startAdornment: <InputAdornment position='start'> +91 </InputAdornment>}}  />
            <TextField label='Email' name="email" type="email" variant='outlined' onChange={handleChange} required />
            <TextField label='Quantity' name="quantity" type="number" onChange={handleChange} InputProps={{endAdornment: <InputAdornment position='end'> Nos </InputAdornment>}} sx={{width:"30%"}} />
            <TextField label='Message' name="message" variant='outlined' multiline rows={3} onChange={handleChange} required />
            <Stack direction= 'row' spacing={2} >
                <Button variant="contained" size="medium" onClick={handleSubmit} sx={{width:"20%", fontSize:15}}>Submit </Button>
                <Button variant="outlined" size="medium" sx={{width:"20%", fontSize:15}}>Reset </Button>
            </Stack>
        </Stack>
    </Paper>
</Box>
)

// console.log(data)
}

export default Contact