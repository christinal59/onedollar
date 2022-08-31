import React from 'react';
import styled from 'styled-components';

import FramesList from './FramesList';

const Frames = () => {

    return (
        <FramesStyled className='Frames'>
            Frames 
            <FramesList />
        </FramesStyled>
    );
}

export default Frames;

const FramesStyled = styled.div`
    
`;