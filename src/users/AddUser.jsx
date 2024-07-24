import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, TextField, Button, Typography, Box } from '@mui/material';

export default function AddUser() {

    let navigate = useNavigate()

    const [user, setUsers] = useState({
        name: "",
        username: "",
        email: ""
    })

    const {name, username, email} = user

    const onInputChange = (e) => {
            setUsers({...user,[e.target.name]: e.target.value})
    }


    const onSubmit =  async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user)
        navigate("/");
    }
  return (
    <Container maxWidth="sm">
            <Box sx={{ mt: 4, p: 4, boxShadow: 3, borderRadius: 2 }}>
                <Typography variant="h4" component="h2" gutterBottom align="center">
                    Register User
                </Typography>
                <form onSubmit={onSubmit}>
                    <Box mb={3}>
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            name="name"
                            value={name}
                            onChange={onInputChange}
                            required
                        />
                    </Box>
                    <Box mb={3}>
                        <TextField
                            fullWidth
                            label="Username"
                            variant="outlined"
                            name="username"
                            value={username}
                            onChange={onInputChange}
                            required
                        />
                    </Box>
                    <Box mb={3}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            required
                        />
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                        <Button component={Link} to="/" variant="outlined" color="secondary">
                            Cancel
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
}
