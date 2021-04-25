import React from 'react';
import Header from './common/Header'
import { Typography } from '@material-ui/core';
const Main = () => {
    return (
        <>
            <Header/>
            <div>
                <Typography variant="h2" align="center">Video Chat</Typography>
            </div>
        </>
    );
};

export default Main;