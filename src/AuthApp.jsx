import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Users from './Components/Users/Users';
import Posts from './Components/Posts/Posts';
import Comments from './Components/Comments/Comments';

function AuthApp() {
    const navigate = useNavigate();
    return (
        <Routes>
            <Route path='/users' element={<Users />} />
            <Route path='/posts/:user_id' element={<Posts />} />
            <Route path='/comments/:post_id' element={<Comments />} />
            <Route path='*' element={<button style={{ cursor: "pointer" }} onClick={() => {
                navigate(-1);
            }}>There is no page. Click on me!</button>} />
        </Routes>
    )
}

export default AuthApp;