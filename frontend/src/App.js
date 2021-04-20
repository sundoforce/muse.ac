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
import TutorListPage from "./pages/TutorListPage";
import TutorPage from "./pages/TutorPage";
import ConcertListPage from "./pages/ConcertListPage";
import ConcertPage from "./pages/ConcertPage";

const App = () => {
    return (
        <>
            <Helmet>
                <title>Muse.ac :: 뮤즈아카데미</title>
            </Helmet>
            {/*공통*/}
            <Route component={LoginPage} path="/login" />
            <Route component={RegisterPage} path="/register"/>
            {/*메인페이지*/}
            <Route component={MainPage} path={['/']} exact />
            {/*실시간 합주*/}
            <Route component={PlayRoomListPage} path='/playrooms'/>
            <Route component={PlayRoomPage} path='/playroom/:playId'/>
            {/*1:1 렛슨*/}
            <Route component={TutorListPage} path='/tutors'/>
            <Route component={TutorPage} path='/tutor/:tutorId'/>
            {/*Live Concert*/}
            <Route component={ConcertListPage} path='/concerts'/>
            <Route component={ConcertPage} path='/concert/:concertId'/>
            {/*게시판 - TODO*/}
            <Route component={PostListPage} path='/@:username'/>
            <Route component={WritePage} path="/write"/>
            <Route component={PostPage} path="/@:username/:postId"/>
        </>
    )
}
export default App;
