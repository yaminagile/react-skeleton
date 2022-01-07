import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    return (
        <>
            In Dashboard <br />
            <Link to={'/signin'}>Back to signIn</Link>

        </>
    );
}

export default Dashboard;