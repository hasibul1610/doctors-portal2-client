import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container, Box } from '@mui/material';



const bannerBg = {
    background: `url(${bg})`,
    height: 450
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h2">
                            YOUR SMILE <br /> STARTS HERE
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam numquam fuga at, a culpa tempore reiciendis! Dolore facilis explicabo ducimus sunt, repellat recusandae natus deleniti
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}> Learn More</Button>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: 450 }} src={chair} alt="Chair" />

                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;