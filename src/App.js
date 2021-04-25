import React from 'react';
import {Route} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Test from './components/test'
const App = () => {
    return (
        <>
            <Helmet>
                <title>Muse.ac :: 뮤즈아카데미</title>
            </Helmet>
            {/*공통*/}
            {/*window.location.replace("/")*/}
            <Route component={Test} path={['/', '/tutors']} exact />
        </>
    )
}
export default App;
