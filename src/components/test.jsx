import React from 'react';
import Header from './common/Header'
import {makeStyles} from '@material-ui/core/styles';

import VideoPlayer from "./tutor/VideoPlayer";
import Sidebar from "./tutor/Sidebar";
import Notifications from "./tutor/Notifications";

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',

        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
    },
    image: {
        marginLeft: '15px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
}));
const Test = () => {
    const classes = useStyles();
    return (
        <>
            <Header/>
            <div className={classes.wrapper}>
                    <VideoPlayer/>
                    <Sidebar>
                        <Notifications/>
                    </Sidebar>
            </div>

        </>
    );
};

export default Test;