import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../Context/index.js';
import { addField, updateField } from '../Context/actions.js';


/* Components ---------------------------*/
import FormGroup from './FormGroup/FormGroup.jsx';
const Input = ({
    label,
    id,
    defaultValue='',
    type='text',
    placeholder='',
    rules=[],
    maxLength=524288,
}) => {

    const { dispatch, state} = useContext(Context);

    const thisField = state.fields.find((field) => {
        return(field.id === id);
    })

    const renderedValue= thisField ? thisField.value : defaultValue;

    /* Component Mount ---------------------------*/
    useEffect(() => {
        const theField ={
            id: id,
            label: label,
            value: defaultValue,
            rules: rules,
        }
        
        dispatch(addField( theField, state));
    }, []);

    const onChange = (e) => {

        dispatch(updateField( id, e.target.value, state));
    }

    return (
        <InputStyled className='Input'>
            <FormGroup thisField={ thisField } id={ id } label={ label }>

                <input 
                    id={ id }
                    type={ type }
                    placeholder={ placeholder }
                    value= { renderedValue}
                    maxLength= { maxLength }
                    onChange={ onChange }
                />
            </FormGroup>
        </InputStyled>
    );
}

export default Input;

const InputStyled = styled.div`
    input{
        width: 100%;
        font-size: 20px;
        padding: 10px;
        border: solid 2px #eee;
        border-radius: 5px;
        outline: none;

        &:focus {
            background-color: #eee;
            border-color: #999;
        }

        &.error {
            border: solid 2px red;
        }
    }
`;