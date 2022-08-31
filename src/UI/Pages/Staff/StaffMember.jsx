import React from 'react';
import styled from 'styled-components';


/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'UI/common/useMediaQuery';

/* Components ---------------------------*/
import Lightbox, {ActiveArea, Modal} from 'UI/common/Lightbox/Lightbox';
import AccoladesList from './Accolades/AccoladesList';

const StaffMember = ({member}) => {
    

    return (
        <StaffMemberStyled className='StaffMember'>
            <Lightbox 
                title={ member.name }
                displayName='Staff Member Lightbox'
            >
                <ActiveArea>
                    <img src ={ member.image } alt={ member.name } />
                    <h3> { member.name }</h3>
                </ActiveArea>

                <Modal>
                    <img src ={ member.image } alt={ member.name } />
                    <p><b>Year Started:</b> { member.yearStarted }</p>


                    <AccoladesList accolades={ member.specifications }/>
                </Modal>
            </Lightbox>
        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`

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