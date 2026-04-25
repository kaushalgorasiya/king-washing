import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Hero } from './Hero';  // Assuming there is a Hero component
import { FeaturedServices } from './FeaturedServices';  // Assuming there is a FeaturedServices component

const Home = () => {
    return (
        <Container maxWidth="lg">
            <Hero />
            <Grid container spacing={4} style={{ margin: '2rem 0' }}>
                <FeaturedServices />
            </Grid>
            <Button variant="contained" color="primary" size="large" style={{ margin: '2rem 0' }}>
                Get Started
            </Button>
        </Container>
    );
};

export default Home;
