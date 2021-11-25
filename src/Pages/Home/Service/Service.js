import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Service = (props) => {
    const { name, description, image } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, boxShadow: 0, border: 0 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    style={{
                        height: "80",
                        width: "auto",
                        margin: "0 auto"
                    }}
                    image={image}
                />
                <CardContent>

                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>
    );
};

export default Service;