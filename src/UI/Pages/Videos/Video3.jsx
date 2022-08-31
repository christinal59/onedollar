import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';


const Video3 = () => {

    return (
        <Video3Styled className='Video3'>
            <ReactPlayer url='https://www.youtube.com/watch?v=c80tC67h0zw' />
        </Video3Styled>
    );
}

export default Video3;

const Video3Styled = styled.div`
    
`;