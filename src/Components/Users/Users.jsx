import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Lib/Load/Loading';
import { Context } from '../../Context/Token/TokenContext';
import { Grid, Card, CardActionArea, CardContent, Typography, TextField, Box, Button } from '@mui/material';

function Users() {
    const [users, setUsers] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [filteredUsers, setFiltered] = React.useState(users);
    const ctxToken = React.useContext(Context);
    const navigate = useNavigate();

    React.useEffect(() => {
        setFiltered(users);
    }, [users]);

    React.useEffect(() => {
        (async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();

            if (data) {
                setLoading(false);
                setUsers(data);
            } else {
                setLoading(false)
                console.log('error');
            }
        })()
    }, []);
    return (
        <div className="users" style={{ marginTop: "30px" }}>
            <div className="container">
                <Box className="users__inner" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <TextField sx={{ marginBottom: "20px" }} type="text" className='users__input' label='Input Name' variant='outlined' onChange={(evt) => {
                        const input = evt.target.value;
                        const regex = new RegExp(input.trim(), 'gi');

                        const filtered = users.filter((user) => user.name.match(regex))
                        setFiltered(filtered);
                    }} />

                    <Grid className="users__list" mb={3} rowSpacing={4} justifyContent="space-evenly" container spacing={4}>
                        {loading && <Loading />}
                        {filteredUsers ? filteredUsers.map((user) => <Grid item className="users__item" key={user.id}>
                            <Link to={`/posts/${user.id}`} className="users__link" style={{ textDecoration: "none", color: "black", fontWeight: '300' }} >
                                <Card>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography variant='h3'>
                                                {user.name}
                                            </Typography>
                                            <Typography variant='body2' fontSize={20} color="text.secondary">
                                                {user.username}
                                            </Typography>
                                            <Typography variant='body2' fontSize={20} color="text.secondary" mb={2}>
                                                {user.email}
                                            </Typography>
                                            <Typography variant='h4'>
                                                Address
                                            </Typography>
                                            <Typography variant='body2' fontSize={20} color="text.secondary">
                                                Street: {user.address.street}
                                            </Typography>
                                            <Typography variant='body2' fontSize={20} color="text.secondary">
                                                Suite: {user.address.suite}
                                            </Typography>
                                            <Typography variant='body2' fontSize={20} color="text.secondary">
                                                City: {user.address.city}
                                            </Typography>
                                            <Typography variant='body2' fontSize={20} color="text.secondary">
                                                Zip: {user.address.zipcode}
                                            </Typography>
                                            <Typography variant='body2' fontSize={20} color="text.secondary" mb={3}>
                                                Geo: {user.address.geo.lat} {user.address.geo.lng}
                                            </Typography>
                                            <Typography variant='body2' fontSize={20} color="text.secondary">
                                                Phone: {user.phone}
                                            </Typography>
                                            <Typography variant='body2' fontSize={20} color="text.secondary" mb={3}>
                                                Website: {user.website}
                                            </Typography>
                                            <Typography variant='h4'>
                                                Company
                                            </Typography>
                                            <Typography variant='body2' fontSize={20} color="text.secondary">
                                                Name: {user.company.name}
                                            </Typography>
                                            <Typography variant='body2' fontSize={20} color="text.secondary">
                                                Phrase: {user.company.catchPhrase}
                                            </Typography>
                                            <Typography variant='body2' fontSize={20} color="text.secondary">
                                                BS: {user.company.bs}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                        ) : 'Error'}
                    </Grid>

                    <Button variant='outlined' sx={{ marginBottom: "60px" }} className="users__button" onClick={() => {
                        ctxToken.setToken(null);
                        navigate('/');
                    }}>Log out</Button>
                </Box>
            </div>
        </div>
    )
}

export default Users;