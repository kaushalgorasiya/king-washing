import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Booking = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [service, setService] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle booking submission here
        console.log({ date, time, service, customerName, customerEmail });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField 
                label="Customer Name" 
                value={customerName} 
                onChange={(e) => setCustomerName(e.target.value)}
                required
            />
            <TextField 
                label="Customer Email" 
                type="email" 
                value={customerEmail} 
                onChange={(e) => setCustomerEmail(e.target.value)}
                required
            />
            <TextField 
                label="Date" 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                required
            />
            <TextField 
                label="Time" 
                type="time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)} 
                required
            />
            <FormControl required>
                <InputLabel>Service</InputLabel>
                <Select 
                    value={service} 
                    onChange={(e) => setService(e.target.value)}
                >
                    <MenuItem value="cleaning">Cleaning</MenuItem>
                    <MenuItem value="full-body-wash">Full Body Wash</MenuItem>
                    <MenuItem value="interior-clean">Interior Clean</MenuItem>
                </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">Book Appointment</Button>
        </form>
    );
};

export default Booking;