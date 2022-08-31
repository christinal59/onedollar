import React, { useState }from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MainMenu = ({showMenuUpdate }) => {

    const onClick =() => {
        if (showMenuUpdate) {
            showMenuUpdate(false);
        }

    }
    const [showVideoSub, showVideoSubUpdate] = useState(false);

    const toggleVideoSub = () => {
        showVideoSubUpdate(!showVideoSub);
    }

    return (
        <MainMenuStyled className='MainMenu'>
            <h2> Main Menu </h2>

            <ul>
                <li>
                    <span onClick={ toggleVideoSub }>Videos v</span>
                    {
                        showVideoSub &&
                        <ul>
                            <li><NavLink to={ '/videos'}>Sub1</NavLink></li>
                            <li><NavLink to={ '/videos/sub2'}>Sub2</NavLink></li>
                            <li><NavLink to={ '/videos/sub3'}>Sub3</NavLink></li>
                        </ul>
                    }
                </li>
                <li><NavLink onClick={ onClick } to={ '/'} end>Home</NavLink></li>
                <li><NavLink onClick={ onClick } to={ '/staff'}>Picture Frames</NavLink></li>
                <li><NavLink onClick={ onClick } to={ '/contact'}>Contact</NavLink></li>
                <li><NavLink onClick={ onClick } to={ '/login'}>Login</NavLink></li>
                <li><NavLink onClick={ onClick } to={ '/frames'}>Frames</NavLink></li>
            </ul>
        </MainMenuStyled>
    );
}

export default MainMenu;

const MainMenuStyled = styled.div`
    ul, li {
        padding: 0px;
        margin: 0px;
        list-style-type: none;
    }
`;