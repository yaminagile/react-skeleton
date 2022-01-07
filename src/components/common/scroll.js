import React, { useEffect } from 'react';

const ScrollToTop = (props) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [props.location]);

    return (
        <>
            {props.children}
        </>
    );
}

export default ScrollToTop;