import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


const SignIn = lazy(() => import('../pages/SignIn'))

const Routing = () => {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<Navigate replace to="/signin" />} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    );
}

export default Routing;