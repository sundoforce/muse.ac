import React from 'react';
import {Route} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Test from './components/test'
import CreateRoom from "./components/room/CreateRoom";
import Room from "./components/room/Room";
const App = () => {
    return (
        <>
            <Helmet>
                <title>Muse.ac :: 뮤즈아카데미</title>
            </Helmet>
            {/*공통*/}
            {/*window.location.replace("/")*/}
            <Route component={Test} path={['/', '/tutors']} exact />
            <Route component={CreateRoom} path={'/rooms'} exact />
            <Route component={Room} path={'/room/:roomID'} exact />
        </>
    )
}
export default App;
