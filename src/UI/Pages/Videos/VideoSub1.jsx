import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const VideoSub1 = () => {

    return (
        <VideoSub1Styled className='VideoSub1'>
            
            <ReactPlayer url='https://www.youtube.com/watch?v=Hmru43DTb2Y'/>
      
        </VideoSub1Styled>
    );
}

export default VideoSub1;

const VideoSub1Styled = styled.div`
    
`;