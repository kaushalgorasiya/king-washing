import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const services = [
    { name: 'Basic Wash', price: '$10' },
    { name: 'Deluxe Wash', price: '$20' },
    { name: 'Premium Wash', price: '$30' },
];

const Services = () => {
    return (
        <Grid container spacing={4}>
            {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {service.name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {service.price}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Services;