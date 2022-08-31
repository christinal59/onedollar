import React from 'react';
import styled from 'styled-components';

const Specification = ({specification}) => {

    return (
        <SpecificationStyled className='Specification'>
            {specification }
        </SpecificationStyled>
    );
}

export default Specification;

const SpecificationStyled = styled.li`
    
`;