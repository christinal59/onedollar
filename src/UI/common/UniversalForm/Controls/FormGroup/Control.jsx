import React from 'react';
import styled from 'styled-components';

import ControlFeedback from './ControlFeedback.jsx';

const Control = ({children, id}) => {

    return (
        <ControlStyled className='Control'>
            {children}
            <ControlFeedback id={ id } />
        </ControlStyled>
    );
}

export default Control;

const ControlStyled = styled.div`
    color: #b10202;
    padding: 5px 0px;

    ul{
        padding: 0px;
        margin: 5px 0px 0px;
        li {
            list-style-type: none;
        }
    }
`;