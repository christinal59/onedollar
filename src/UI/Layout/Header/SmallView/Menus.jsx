import React, { useEffect }from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import MainMenu from '../Menus/MainMenu.jsx';
import ClassMenu from '../Menus/ClassMenu.jsx';

const Menus = ({showMenuUpdate}) => {

    useEffect(() => {

        document.body.classList.add("modal-open");

        return () => {
            document.body.classList.remove("modal-open");
        }
        
    }, []);

    return (
        <MenusStyled className='Menus'>
            <MainMenu showMenuUpdate={ showMenuUpdate } />
            <ClassMenu showMenuUpdate={ showMenuUpdate } />
        </MenusStyled>
    );
}

export default Menus;

const MenusStyled = styled.div`
    position: fixed;
    left: 0px;
    top: 75px;
    right: 0px;
    bottom: 0px;

    z-index: 1000;

    background-color: #014444;

    h2{
        font-size:20px;
        margin: 0px;
        padding: 10px;
        color: white;
        border-bottom: 1px solid #999999;
    }

    a{
        display: block;
        padding: 10px;
        border-bottom: 1px solid #999999;
        color: white;
        text-decoration: none;

        &:hover &:active, &:focus {
            background-color: #002a2a;
        }
    }

`;