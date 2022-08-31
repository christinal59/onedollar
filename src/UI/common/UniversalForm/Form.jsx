import React, {useContext} from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from './Context/index.js';
import { submitForm } from './Context/actions';

const Form = ({children}) => {

    const { dispatch, state } = useContext(Context);

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log('Submitted Form');

        submitForm(state, dispatch);
    }

    if(state.feedback.show && state.feedback.type === '') {
        return ' ';

    }
    return (
        <FormStyled className='Form'>
            <form noValidate onSubmit={ handleSubmit}> 
                { children }
            </form>
        </FormStyled>
    );
}

export default Form;

const FormStyled = styled.div`
    
`;