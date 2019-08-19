import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { classnames } from 'react-components';

import { useMainArea } from '../hooks/useMainArea';

const Title = ({ children }) => {
    const mainAreaRef = useMainArea();
    const [topClass, setClass] = useState('');

    const onScroll = () => {
        setClass(mainAreaRef.current.scrollTop ? '' : 'sticky-title--onTop');
    };

    useEffect(() => {
        document.querySelector('.main-area').addEventListener('scroll', onScroll);
        return () => {
            mainAreaRef.current.removeEventListener('scroll', onScroll);
        };
    }, [mainAreaRef.current]);

    return <h1 className={classnames(['sticky-title', topClass])}>{children}</h1>;
};

Title.propTypes = {
    children: PropTypes.node.isRequired,
    mainRef: PropTypes.object
};

export default Title;
