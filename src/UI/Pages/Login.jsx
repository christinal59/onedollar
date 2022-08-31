import React from 'react';
import styled from 'styled-components';

import UniversalForm, {Input, Textarea, SubmitButton} from 'UI/common/UniversalForm/UniversalForm';


const Login = () => {

        const onSubmit = ({fields, payload}) => {
            console.log('Login Form');
    
            console.log('fields', fields);
            console.log('payload', payload);
    
            console.groupEnd();
        }

    return (
        <LoginStyled className='Login inset'>
            <h1>Login</h1> 

            <UniversalForm
                displayName='UF: Contact Form'
                onSubmit={ onSubmit}
            >
                <Input 
                    label='Email'
                    id='username'
                    type='email'
                    placeholder='email'
                    defaultValue='user@gmail.com'
                    rules={ ['required', 'email']}

                    />
                <Input 
                    label='password'
                    id='password'
                    type='password'
                    placeholder='password'
                    defaultValue='password'
                    rules={ ['required']}

                    />
                
        
                <SubmitButton>Login</SubmitButton>
                </UniversalForm>
        </LoginStyled>
    );
}

export default Login;

const LoginStyled = styled.div`
    
`;