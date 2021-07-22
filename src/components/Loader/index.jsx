import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/56292-book-logo.json'

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderSettings:{
            preserveAspectRatio: 'zMidYMid slide'
        },
    };
    return <Lottie options={defaultOptions} />;
};

export default Loader;