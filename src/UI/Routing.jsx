import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home.jsx';
import Staff from './Pages/Staff/Staff.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './Pages/Login.jsx';
import Frames from './Pages/Frames/Frames.jsx';

import ClassWork from './Pages/ClassWork/ClassWork.jsx';
import Homework from './Pages/ClassWork/Homework/Homework.jsx';
import SwapList from './Pages/ClassWork/Swapper/SwapList.jsx';
import JavaScript from './Pages/ClassWork/JavaScript/JavaScript.jsx';
import ControlledInput from './Pages/ClassWork/ControlledInput.jsx';
import Forms from './Pages/ClassWork/Forms.jsx';


import Videos from './Pages/Videos/Videos.jsx';
import Video1 from './Pages/Videos/Video1.jsx';
import Video2 from './Pages/Videos/Video2.jsx';
import Video3 from './Pages/Videos/Video3.jsx';


const Routing = () => {

    return (
        <RoutingStyled className='Routing'>
            <Routes>
                <Route element={ <Home /> }         path='' />
                <Route element={ <Staff/> }         path='/staff' />
                <Route element={ <Contact /> }         path='/contact' />
                <Route element={ <Login /> }         path='/login' />
                <Route element={ <Frames />}         path='/frames' />

                <Route element={ <ClassWork /> }    path='class'>
                    <Route element={ <Homework /> }         path='' />
                    <Route element={ <SwapList/> }          path='swapper' />
                    <Route element={ <JavaScript/> }        path='javascript' />
                    <Route element={ <ControlledInput/> }   path='controlled-input' />
                    <Route element={ <Forms/> }             path='forms' />
                </Route>
                <Route element={ <Videos /> }    path='videos'>
                    <Route element={ <Video1 /> }         path='' />
                    <Route element={ <Video2 /> }         path='sub2' />
                    {/* <Route element={ <Video3 /> }         path='sub3' /> */}
                </Route>
                
            </Routes>
        </RoutingStyled>
    );
}

export default Routing;

const RoutingStyled = styled.div`
    
`;