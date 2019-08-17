import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { classnames } from 'react-components';

const Title = ({ children, mainRef }) => {
    const [topClass, setClass] = useState('');

    const onScroll = () => {
        if (mainRef.current.scrollTop === 0) {
            setClass('sticky-title--onTop');
        } else {
            setClass('');
        }
    };

    useEffect(() => {
        mainRef.current.addEventListener('scroll', onScroll);
        return () => {
            mainRef.current.removeEventListener('scroll', onScroll);
        };
    }, []);

    return <h1 className={classnames(['sticky-title', topClass])}>{children}</h1>;
};

Title.propTypes = {
    children: PropTypes.node.isRequired,
    mainRef: PropTypes.object
};

export default Title;
