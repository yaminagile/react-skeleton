import React from 'react';

// import Header from '../common/header'
// import Footer from '../common/footer'


const withLayout = Content => {

    let Layout = () => {

        return (
            <>
                <Content />
            </>
        )
    }

    return Layout;
}

export default withLayout;