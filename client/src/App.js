import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = (googleAPIKey) => {
    return (
        <GoogleOAuthProvider clientId={`${googleAPIKey.api}`}>
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