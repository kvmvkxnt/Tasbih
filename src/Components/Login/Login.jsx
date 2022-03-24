import React from 'react';
import { findElement } from '../../utils';
import { Context as TokenContext } from '../../Context/Token/TokenContext';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';

function Login() {
    const ctxToken = React.useContext(TokenContext);
    const navigate = useNavigate();

    async function handleSubmit(evt) {
        evt.preventDefault();

        const form = evt.target;
        const userName = findElement('#login-input', form);
        const pass = findElement('#pass-input', form);
        const error = findElement('.login__error', form);

        error.textContent = 'Wait...';

        const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: userName.value.trim(),
                password: pass.value.trim(),
            })
        });

        const data = await response.json();

        if (data?.token) {
            ctxToken.setToken(data.token);
            navigate('/users')
        } else {
            error.textContent = data.error;
        }
    }
    return (
        <div className='login'>
            <div className="container">
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} className="login__inner">
                    <Typography variant="h1" className="login__heading" mb={3}>Login</Typography>
                    <form style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: "670px" }} className='login__form' onSubmit={handleSubmit}>

                        <TextField type="text" className='login__input' id='login-input' defaultValue='eve.holt@reqres.in' variant='outlined' label='Email' sx={{ marginBottom: "10px" }} />
                        <TextField type="text" className='login__input' id='pass-input' defaultValue='cityslicka' variant='outlined' label='Password' sx={{ marginBottom: "10px" }} />

                        <Button type="submit" className='login__button' variant='contained' sx={{ marginBottom: "20px" }}>Log In</Button>

                        <Typography className="login__error" color="error"></Typography>
                    </form>
                </Box>
            </div>
        </div>
    )
}

export default Login;