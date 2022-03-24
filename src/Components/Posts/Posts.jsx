import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Loading from '../Lib/Load/Loading';
import { Context } from '../../Context/Token/TokenContext';
import { Breadcrumbs, Button, Typography, Grid, Box, Card, CardActionArea, CardContent } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Posts() {
    const { user_id } = useParams();
    const [posts, setPosts] = React.useState();
    const [loading, setLoading] = React.useState(true);
    const ctxToken = React.useContext(Context);
    const navigate = useNavigate();

    React.useEffect(() => {
        (async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();

            if (data) {
                const filtered = data.filter((post) => post.userId === Number(user_id));
                setLoading(false);
                setPosts(filtered);
            } else {
                setLoading(false);
                console.log('error');
            }
        })();
    }, [user_id]);

    const breadcrumbs = [
        <Link key='1' style={{ color: "inherit", textDecoration: 'none' }} to='/users'>
            Users
        </Link>,
        <Typography key="2" color="text.primary">
            Posts
        </Typography>
    ]

    return (
        <div className='posts' style={{ marginTop: "20px" }}>
            <div className="container">
                <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center" }} className="posts__inner">
                    <Breadcrumbs className="posts__bread" aria-label='breadcrumb' sx={{ alignSelf: "flex-start", marginBottom: "20px" }} separator={<NavigateNextIcon fontSize="small" />}>
                        {breadcrumbs}
                    </Breadcrumbs>
                    <Grid container spacing={2} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} mb={5} className="posts__list">
                        {loading && <Loading />}
                        {posts && posts.map((post) => <Grid item className="posts__comm" xs={12} md={6} lg={4} key={post.id}>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Link to={`/comments/${post.id}`} style={{ textDecoration: 'none', color: "inherit" }} className='posts__link'>
                                            <Typography variant='h4' className="posts__title">{post.title}</Typography>
                                            <Typography variant='body1' color='text.secondary' className="posts__text">{post.body}</Typography>
                                        </Link>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>)}
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

export default Posts;