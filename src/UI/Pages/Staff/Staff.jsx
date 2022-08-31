import React from 'react';
import styled from 'styled-components';

import StaffList from './StaffList';

const Staff = () => {

    return (
        <StaffStyled className='Staff inset'>
            <h1>Picture Frames</h1>
            <StaffList />
        </StaffStyled>
    );
}

export default Staff;

const StaffStyled = styled.div`
    
`;