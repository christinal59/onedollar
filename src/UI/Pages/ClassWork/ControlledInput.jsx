import React, { useState } from 'react';
import styled from 'styled-components';

const ControlledInput = () => {

    const [inputValue, inputValueUpdate] = useState('Say what');

    const handleChange = (event) => {
        console.log('event', event);
        console.log('event.target.value', event.target.value);
        inputValueUpdate(event.target.value);
    }

    return (
        <ControlledInputStyled className='ControlledInput'>
            <h2> Controlled Input </h2>

            <input 
                type= 'text'
                placeholder='Controlled Input'
                onChange= { handleChange }
                value={ inputValue }
            />
            <h4><b>User Typed:</b> {inputValue}</h4>
        </ControlledInputStyled>
    );
}

export default ControlledInput;

const ControlledInputStyled = styled.div`
    input{
        font-size: 30px;
        padding: 20px;
        display: block;
        width: 100%;

    }

    h4 {
        font-size: 20px;
        margin: 20px 0px;
    }
`;