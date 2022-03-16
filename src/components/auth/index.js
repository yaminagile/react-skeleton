import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

let AuthGuard = ({ children }) => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(s => !!s?.auth?.user?.token);

    useEffect(() => {
        if (!isLoggedIn) navigate('/signin');
    }, [isLoggedIn, navigate])

    return (
        <>
            {children}
        </>
    )
}

export default AuthGuard;