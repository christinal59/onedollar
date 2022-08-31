import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Video2 = () => {

    return (
        <Video2Styled className='Video2'>
            <ReactPlayer url='https://www.youtube.com/watch?v=EBMEKgdMjJk'/>
        </Video2Styled>
    );
}

export default Video2;

const Video2Styled = styled.div`
    
`;