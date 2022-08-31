import React from 'react';
import styled from 'styled-components';

import { defaultMediaQueries } from 'UI/common/useMediaQuery.js';

import SiteLogo from 'UI/common/SiteLogo.jsx';

const Footer = () => {

    return (
        <FooterStyled className='Footer'>
            <div className="logo">
            <SiteLogo />
            </div>
            <h2>Prices and availability may vary between stores and online.</h2>
            <div className="copyright">&copy;2022. All rights reserved.</div>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: white;
    /* color: white; */


    padding: 20px 0px;
    margin: 50px 0px 0px;

    text-align:center;

    .logo{
        display: flex;
        justify-content: center;
    }
    .SiteLogo{
        width: 150px;
        margin-bottom: 10px;

        @media ${defaultMediaQueries.mdUp} {
            width: 300px;
        }
    }


    h2{
        font-family: "Apple Chancery", cursive;
        margin: 5px 0px;
        font-size: 14px;
    }

    .copyright{
        /* color: black; */
        font-size: 14px;
    }
`;