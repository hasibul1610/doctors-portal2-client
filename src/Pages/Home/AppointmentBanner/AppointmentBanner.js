import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import { Button, Typography } from '@mui/material';
import bg from '../../../images/appointment-bg.png';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: "rgba(118, 146, 194,0.3)",
    backgroundBlendMode: "darken,luminosity",
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ height: 600, marginTop: -130 }}
                        src={doctor} alt="doctor" />
                </Grid>
                <Grid item xs={12} md={6} sx={{

                    justifyContent: "flex-start",
                    alignItems: "center",
                    textAlign: "left"
                }}>
                    <Typography variant="h6" sx={{ my: 4, color: "white" }}>
                        APPOINMENT
                    </Typography>
                    <Typography variant="h3" sx={{ my: 4, color: "white" }}>
                        MAKE AN APPOINMENT TODAY
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit, amet hijibijij adipisicing elit. Ullam numquam fuga at, a culpa tempore reiciendis! Dolore facilis explicabo ducimus sunt, repellat recusandae natus deleniti
                    </Typography>
                    <Button sx={{ my: 4 }} style={{ backgroundColor: "skyblue" }}>Learn More</Button>

                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;