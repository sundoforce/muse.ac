import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PlayRoomListContainer from '../containers/playrooms/PlayRoomListContainer';
import {Link} from "react-router-dom";
import PaginationContainer from "../containers/posts/PaginationContainer";

const MainPage = () => {
    return (
        <>
            <HeaderContainer />
            <PlayRoomListContainer />
            <PaginationContainer />
        </>
    );
};

export default MainPage;
