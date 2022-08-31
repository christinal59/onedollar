import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ClassMenu = ({showMenuUpdate }) => {

    const onClick =() => {
        if (showMenuUpdate) {
            showMenuUpdate(false);
        }

    }

    return (
        <ClassMenuStyled className='MainMenu'>
            <h2>Class Menu</h2>
            <NavLink to={ '/class'}>Class</NavLink>
        </ClassMenuStyled>
    );
}

export default ClassMenu;

const ClassMenuStyled = styled.div`
    a {
        color: white;
        margin: 0px 20px;
    }
`;