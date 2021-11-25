import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import flouride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';


const services = [
    {
        name: 'Flouride Treatment',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam numquam fuga at, a culpa tempore reiciendis! Dolore facilis explicabo ducimus sunt, repellat recusandae natus deleniti necessitatibus dolorem aperiam, deserunt soluta!',
        image: flouride

    },
    {
        name: 'Cavity Feeling',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam numquam fuga at, a culpa tempore reiciendis! Dolore facilis explicabo ducimus sunt, repellat recusandae natus deleniti necessitatibus dolorem aperiam, deserunt soluta!',
        image: cavity

    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam numquam fuga at, a culpa tempore reiciendis! Dolore facilis explicabo ducimus sunt, repellat recusandae natus deleniti necessitatibus dolorem aperiam, deserunt soluta!',
        image: whitening

    }

]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ fontWeight: 600, color: 'success.main', m: 2, textAlign: 'center' }} variant="h6" component="div">
                OUR SERVICES
            </Typography>
            <Typography sx={{ fontWeight: 600, m: 4, textAlign: 'center' }} variant="h4" component="div">
                SERVICES WE PROVIDED
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;