import React from 'react';
import styled from 'styled-components';

import { useMediaQuery } from 'UI/common/useMediaQuery.js';

import MediumLargeView from './MediumLargeView/MediumLargeView.jsx';
import SmallView from './SmallView/SmallView.jsx';

const Header = () => {

    const { media }= useMediaQuery();

    return (
        <HeaderStyled className='Header'>
            <h1>One Dollar Tree</h1>

            {
                (media.mdUp) ? <MediumLargeView /> : <SmallView />
            }
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: #00953A;
    color: white;

    h2 {
        color: white;
    }
`;