import React from 'react';
import styled from 'styled-components';


import UniversalForm, {Input, Textarea, SubmitButton} from 'UI/common/UniversalForm/UniversalForm';

const Contact = () => {

    const onSubmit = ({fields, payload}) => {
        console.log('Contact Work Form');

        console.log('fields', fields);
        console.log('payload', payload);

        console.groupEnd();
    }

    return (
        <ContactStyled className='Contact inset'>
            <h1>Contact </h1>

            <UniversalForm
                displayName='UF: Contact Form'
                onSubmit={ onSubmit}
            >
                <Input 
                    label='email'
                    id='username'
                    type='email'
                    placeholder='email'
                    defaultValue='typeinyouremail@gmail.com'
                    rules={ ['required', 'email']}

                    />
                
                <Textarea
                    label='Tell us about yourself'
                    id='message'
                    type='text'
                    placeholder='Message'
                    defaultValue='I would like to tell you something about the website'
                    rules={ ['required']}
                
                /> 
                <SubmitButton> Send</SubmitButton> 
            </UniversalForm>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    
`;