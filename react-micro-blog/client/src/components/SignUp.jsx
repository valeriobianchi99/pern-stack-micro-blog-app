import React from 'react';
import StyledSignup, { SignupButton } from './styled/Signup.styled';

const SignUp = () => {

    const Signin = (e) => {
        e.preventDefault();
        const str = `${process.env.REACT_APP_SERVER_URL}/auth/google`;
        window.open(str, "_self")
    }

    return (
        <StyledSignup>
            <form onSubmit={(e) => Signin(e)}>
                <div>
                    <h1>Social Media App</h1>
                    <sub>Created by Valerio with the help of Lester</sub>
                </div>
                <SignupButton type='submit'>
                    <p>
                        Sign in with Google
                    </p>
                    <i className="fa-brands fa-google"></i>
                </SignupButton>
            </form>
        </StyledSignup>
    )
}

export default SignUp