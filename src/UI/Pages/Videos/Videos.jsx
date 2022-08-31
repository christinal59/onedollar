import React from 'react';
import styled from 'styled-components';
import { Outlet, NavLink } from 'react-router-dom';

const Videos = () => {

    return (
        <VideosStyled className='Videos'>
            <h1>Videos</h1> 

            <nav className='sublinks'>
                <NavLink to='/videos'end>Sub1</NavLink>
                <NavLink to='/videos/sub2'>Sub2</NavLink>
                {/* <NavLink to='/videos/sub3'>Sub3</NavLink> */}
            </nav>
            <Outlet />
        </VideosStyled>
    );
}

export default Videos;

const VideosStyled = styled.div`
    
`;