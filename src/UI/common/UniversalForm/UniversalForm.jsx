import React, { useReducer }from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from './Context/index.js';
import reducer from './Context/reducer.js';

/* Components ---------------------------*/
import Form from './Form.jsx';
import Feedback from './Feedback.jsx';

/* Exported Components ---------------------------*/
export { default as Input } from './Controls/Input.jsx';
export { default as Textarea } from './Controls/Textarea.jsx';
export { default as SubmitButton } from './Controls/SubmitButton.jsx';

const UniversalForm = ( { children, onSubmit=() => {},displayName='Universal Form'} ) => {


    const defaultState= { 
        feedback:{
            show: false,
            type: 'pending',
            message: '',
            payload: {},
        },

        onSubmit: onSubmit,
        fields: [],
    };

    const[state, dispatch] =useReducer(reducer,defaultState);




    return (
        <Context.Provider value={ { state, dispatch }} displayName={ displayName }>
            <UniversalFormStyled className='UniversalForm'>
                <Feedback />
                <Form>
                    { children }
                </Form>
            </UniversalFormStyled>
        </Context.Provider>
    );
}

export default UniversalForm;

const UniversalFormStyled = styled.div`
    
`;