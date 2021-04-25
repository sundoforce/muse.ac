import React from 'react';
import {Route} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Test from './components/test'
import Main from "./components/main";
const App = () => {
    return (
        <>
            <Helmet>
                <title>Muse.ac :: 뮤즈아카데미</title>
            </Helmet>
            {/*공통*/}
            <Route component={Main} path={['/', '/main']} exact />
            <Route component={Test} path='/tutors'/>
        </>
    )
}
export default App;
