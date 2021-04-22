import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import EnsembleListContainer from '../containers/ensembles/EnsembleListContainer';
import PaginationContainer from "../containers/ensembles/PaginationContainer";

const EnsembleListPage = () => {
    return (
        <>
            <HeaderContainer />
            <EnsembleListContainer />
            <PaginationContainer />

        </>
    );
};

export default EnsembleListPage;
