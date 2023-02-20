import React from "react";
import {Card, CardContent, CardHeader, Typography} from '@mui/material';


function Card_info(props) {
    // const navigate = useNavigate();

    return (
        <Card sx={{maxWidth: '80%', backgroundColor: '#ccc' }}>
            
            <CardContent>
                <Typography gutterBottom variant="h5">
                {props.title} </Typography>
                <Typography variant="body2" color="text.primary">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
        
    )
    
}

export default Card_info;