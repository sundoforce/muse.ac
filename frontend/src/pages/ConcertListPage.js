import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import ConcertListContainer from '../containers/concerts/ConcertListContainer';
import PaginationContainer from "../containers/posts/PaginationContainer";

const MainPage = () => {
    return (
        <>
            <HeaderContainer />
            <ConcertListContainer />
            <PaginationContainer />
        </>
    );
};

export default MainPage;
