import React from 'react';
import {Route} from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import PlayRoomListPage from './pages/PlayRoomListPage';
import PlayRoomPage from './pages/PlayRoomPage';
import MainPage from './pages/MainPage';
import {Helmet} from 'react-helmet-async';

const App = () => {
    return (
        <>
            <Helmet>
                <title>Muse.ac :: 뮤즈아카데미</title>
            </Helmet>
            <Route component={PostListPage} path='/@:username'/>
            <Route component={PlayRoomListPage} path='/playrooms'/>
            <Route component={PlayRoomPage} path='/playroom/:playId'/>
            <Route component={MainPage} path={['/@:username', '/']} exact />
            <Route component={LoginPage} path="/login" />
            <Route component={RegisterPage} path="/register"/>
            <Route component={WritePage} path="/write"/>
            <Route component={PostPage} path="/@:username/:postId"/>
        </>
    );
};
export default App;
