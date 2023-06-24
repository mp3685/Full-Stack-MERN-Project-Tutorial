import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

import { useSelector } from 'react-redux';

// import { fetchGoogleAPI } from './api/index.js';

// const data = await fetchGoogleAPI();
// const googleAPIKey = data.data.data;

const App = () => {
    const [googleAPIKey, setGoogleAPIKey] = useState(null);
    const apiKey = useSelector((state) => state);

    useEffect(() => {
        if (apiKey) setGoogleAPIKey(apiKey?.api?.data);
    }, [apiKey]);

    return (
        <GoogleOAuthProvider clientId={`${googleAPIKey}`}>
            <BrowserRouter>
                <Container maxwidth="lg">
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/auth" element={<Auth />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </GoogleOAuthProvider>
    );
};

export default App;