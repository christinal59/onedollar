import React from 'react';
import styled from 'styled-components';

import { framesData } from 'UI/common/data/framesData.js';

import PictureFrames from './PictureFrames.jsx';

const FramesList = () => {

    return (
        <FramesListStyled className='FramesList'>
            <div className="wrapper">
                {
                    framesData.map ((frame,idx) => {
                        return<PictureFrames key={idx } frame={ frame} />
                    })
                }
            </div>
        </FramesListStyled>
    );
}

export default FramesList;

const FramesListStyled = styled.div`
    background-color: teal;
    padding: 20px;
    margin: 20px, 0px;

    .wrapper{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    
`;