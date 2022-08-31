import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'UI/common/useMediaQuery';

/* Components ---------------------------*/
import Lightbox, {ActiveArea, Modal} from 'UI/common/Lightbox/Lightbox';
import SpecificationList from './Specifications/SpecificationList';

const PictureFrames = ({frame}) => {
    

    return (
        <PictureFramesStyled className='PictureFrames'>
            <Lightbox 
                title={ frame.name }
                displayName='Staff frame Lightbox'
            >
                <ActiveArea>
                    <img src ={ frame.image } alt={ frame.name } />
                    <h3> { frame.name }</h3>
                </ActiveArea>

                <Modal>
                    <img src ={ frame.image } alt={ frame.name } />
                    <p><b>Year Started:</b> { frame.yearStarted }</p>
                    <SpecificationList specification={ frame.specifications }/>
                </Modal>
        </Lightbox>
        </PictureFramesStyled>
    );
}

export default PictureFrames;

const PictureFramesStyled = styled.div`
     width:100%;
    margin: 5px 0px;

    @media ${defaultMediaQueries.smUp} {
        width: 45%;
        margin: 5px;
    }
    @media ${defaultMediaQueries.mdUp} {
        width: 30%;
        margin: 5px;
    }
    @media ${defaultMediaQueries.lgUp} {
        width: 20%;
        margin: 20px;
    }

    img{
        width:100%;
        display: black;
        min-height: 150px;
    }
    
    h3{
        color:white;
        background: #014444;
        margin:0px;
        padding: 5px 10px;
    }
`;