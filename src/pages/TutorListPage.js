import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import TutorsListContainer from '../containers/tutors/TutorListContainer';
import PaginationContainer from "../containers/posts/PaginationContainer";

const MainPage = () => {
    return (
        <>
            <HeaderContainer />
            <TutorsListContainer />
            <PaginationContainer />
        </>
    );
};

export default MainPage;
