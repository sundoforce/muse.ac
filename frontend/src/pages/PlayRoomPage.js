import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import MainContainer from '../containers/main/MainContainer';

const MainPage = () => {
    return (
        <>
            <HeaderContainer />
            <center>
                <li>Play Room </li>
            </center>
            <MainContainer />
        </>
    );
};

export default MainPage;
