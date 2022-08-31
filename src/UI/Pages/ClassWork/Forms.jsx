import React from 'react';
import styled from 'styled-components';


import UniversalForm, {Input, Textarea, SubmitButton} from 'UI/common/UniversalForm/UniversalForm';

const Forms = () => {

    const onSubmit = ({fields, payload}) => {
        console.log('Class Work Form');

        console.log('fields', fields);
        console.log('payload', payload);

        console.groupEnd();
    }

    return (
        <FormsStyled className='Forms'>
            <h2>Forms </h2>

            <UniversalForm
                displayName='UF: Classwork Form'
                onSubmit={ onSubmit }
                >

                <Input 
                    label='First Name'
                    id='first'
                    type='text'
                    placeholder='First Name'
                    defaultValue='Christina Li'
                    rules={ ['required']}

                    />
                <Input 
                    label='Last Name'
                    id='last'
                    type='text'
                    placeholder='Last Name'
                    defaultValue='Li'
                    rules={ ['required']}

                    />
                <Input 
                    label='Email'
                    id='email'
                    type='email'
                    placeholder='email'
                    defaultValue='typeinyouremail@gmail.com'
                    rules={ ['required' , 'email' ]}

                    />
                
                <Textarea
                    label='Tell us about yourself'
                    id='about'
                    type='text'
                    placeholder='All about you...'
                    defaultValue='This is what a bio might look like.'
                    rules={ ['required']}
                
                /> 
                <SubmitButton> Submit This Form </SubmitButton> 
            </UniversalForm>

        </FormsStyled>
    );
}

export default Forms;

const FormsStyled = styled.div`
    
`;