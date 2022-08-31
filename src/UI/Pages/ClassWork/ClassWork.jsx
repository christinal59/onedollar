import React from 'react';
import styled from 'styled-components';
import { Outlet, NavLink } from 'react-router-dom';

const ClassWork = () => {
    return (
        <ClassWorkStyled className='ClassWork inset'>
            <h1>Class Work</h1>

            <nav className='sublinks'>
                <NavLink to='/class'end>Essays</NavLink>
                <NavLink to='/class/swapper'>Swapper</NavLink>
                <NavLink to='/class/javascript'>JavaScript</NavLink>
                <NavLink to='/class/controlled-input'>Controlled Input</NavLink>
                <NavLink to='/class/forms'>Forms</NavLink>
                <a href="https://dollartree.com/">go to dollartree</a>
            </nav>
            <Outlet />
        </ClassWorkStyled>
    );
}

export default ClassWork;

const ClassWorkStyled = styled.div`
    nav.sublinks a {
        background-color: #00953A;
    }
`;