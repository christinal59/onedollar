import React from 'react';
import styled from 'styled-components';

import Specification from './Specification.jsx';

const SpecificationList = ({specification}) => {

    return (
        <SpecificationListStyled className='SpecificationList'>
            {
            specification.map((specification,idx) => {
                return <Specification key={ idx } specification = {specification } />
            })
            }
        </SpecificationListStyled>
    );
}

export default SpecificationList;

const SpecificationListStyled = styled.div`
    
`;