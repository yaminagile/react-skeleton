import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import withLayout from '../components/layout';
import SignIn from '../pages/signIn';
import Dashboard from '../pages/dashboard';

const Routing = () => {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/" element={<Navigate replace to="/signin" />} />
        </Routes>
    );
}

export default Routing;