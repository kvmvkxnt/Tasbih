import React from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Components/Login/Login';

function UnauthApp() {
    const navigate = useNavigate();
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='*' element={<button style={{ cursor: "pointer" }} onClick={() => {
                navigate(-1);
            }}>There is no page. Click on me!</button>} />
        </Routes>
    )
}

export default UnauthApp;