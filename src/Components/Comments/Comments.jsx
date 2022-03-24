import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Loading from '../Lib/Load/Loading';
import { Context } from '../../Context/Token/TokenContext';
import { Breadcrumbs, Typography, Box, List, ListItem, ListItemText, Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Comments() {
    const { post_id } = useParams();
    const [loading, setLoading] = React.useState(true);
    const [comms, setComms] = React.useState();
    const ctxToken = React.useContext(Context);
    const navigate = useNavigate();

    React.useEffect(() => {
        (async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/comments');
            const data = await res.json();

            if (data) {
                const filtered = data.filter((comm) => comm.postId === Number(post_id));
                setComms(filtered);
                setLoading(false);
            } else {
                setLoading(false);
                console.log('error');
            }
        })()
    })

    const breadcrumbs = [
        <Link to="/users" key={1} style={{ color: "inherit", textDecoration: "none" }}>
            Users
        </Link>,
        <Link to={-1} key={2} style={{ color: "inherit", textDecoration: "none" }}>
            Posts
        </Link>,
        <Typography key={3} color="text.primary">
            Comments
        </Typography>
    ]

    return (
        <div className='comms' style={{ marginTop: "20px" }}>
            <div className="container">
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} className="comms__inner">
                    <Breadcrumbs className="comms__bread" aria-label='breadcrumb' sx={{ alignSelf: "flex-start", marginBottom: "20px" }} separator={<NavigateNextIcon fontSize="small" />}>
                        {breadcrumbs}
                    </Breadcrumbs>
                    <List className="comms__list">
                        {loading && <Loading />}
                        {comms && comms.map((comm) => <ListItem className='comms__item' key={comm.id}>
                            <ListItemText primary={comm.email} secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >{comm.name}</Typography>
                                    {` — ${comm.body}`}
                                </React.Fragment>
                            } />
                        </ListItem>)}
                    </List>

                    <Button variant='outlined' sx={{ marginBottom: "60px" }} className="users__button" onClick={() => {
                        ctxToken.setToken(null);
                        navigate('/');
                    }}>Log out</Button>
                </Box>
            </div>
        </div>
    )
}

export default Comments;