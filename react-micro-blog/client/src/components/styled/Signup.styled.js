import styled from 'styled-components';

const Signup = styled.div`
    height: 100vh;
    width: 100%;  
    display: flex;
    justify-content: center;
    align-items: center;

    & > form {
        background-color: ${({ theme }) => theme.elevation_1};
        border-radius: 5px;
        height: 400px;
        width: 90%;
        max-width: 500px;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        text-align: center;
        box-shadow: ${({ theme }) => theme.shadow};
        h1 {
            font-family: "Pacifico", cursive;
        }
    }
`;

export const SignupButton = styled.button`
    font-size: 1.3rem;
    width: 90%;
    max-width: 250px;
    height: 15%;
    border-radius: 3px;
    appearance: none;
    --moz-appearance: none;
    --webkit-appearance: none;
    background-color: ${({ theme }) => theme.primary};
    border: 0;
    outline: none;
    color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    &:hover {
        background-color : ${({ theme }) => theme.primaryHover};
    }
    &:active {
        transform: scale(0.98);
    }
    &:focus, &:hover {
        appearance: none;
        --moz-appearance: none;
        --webkit-appearance: none;
        border: 0;
        outline: none;
    }
`;

export default Signup;