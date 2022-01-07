import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {

    return (
        <>
            In signin <br />
            <Link to={'/dashboard'}>Go to Dashboard</Link>
        </>
    );
}

export default SignIn;