import React from 'react';

import Header from './header';
import Footer from './footer';

const withLayout = Content => {

    let Layout = () => {

        return (
            <>
                <Header />
                <Content />
                <Footer />
            </>
        )
    }

    return Layout;
}

export default withLayout;