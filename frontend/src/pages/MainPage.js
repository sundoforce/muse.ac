import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import MainContainer from '../containers/main/MainContainer';

const MainPage = () => {
    return (
        <>
            <HeaderContainer />
            <center>
                <br/>
                <br/>
                <br/>
                <li>Sync Play: online 합주</li>
                <li>Tutor: 비대면 온라인 렛슨</li>
                <li>Live Concert: 온라인 콘서트</li>
                <li>Community: https://musia.live</li>
            </center>
            <MainContainer />
        </>
    );
};

export default MainPage;
