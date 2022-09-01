import styled from "styled-components";

export const PostModalButton = styled.button`
   margin-top: auto;
    margin-inline: auto;
    padding: 1rem .7rem;
    font-size: 1rem;
    font-weight: bold;
    z-index: 2;
    color: ${({ theme }) => theme.primary};
    background-color: transparent;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.primary};
    @media (min-width: 600px) {
        margin-top: 0;
        margin-inline: 0;  
        &:hover {
            color: white;
            background-color: ${({ theme }) => theme.primary};
            transition: background-color 100ms ease-in;
        } 
    }
    &:active {
        transform: scale(98%);
    }
`;

const PostModal = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    background-color: #1118;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PostModalForm = styled.form`
    width: 90%;
    max-width: 500px;
    box-shadow: ${({ theme })=> theme.shadow};
    background-color: ${({ theme })=> theme.elevation_3};
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;

    & > textarea {
        width: 80%;
        max-width: 370px;
        height: 50%;
        box-sizing: border-box;
        outline: 0;
        border: 0;
        padding: 1rem 2rem;
        border-radius: 5px;
        resize: none;
    }

    & > button {
        /* margin-top: auto;
        margin-bottom: auto; */
        color: white;
        background-color: ${({ theme })=> theme.primary};
        outline: 0;
        border: 0;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        text-decoration: none;
        padding: .7rem 1.5rem;
        font-size: 1rem;
        border-radius: 5px;
        &:active {
            transform: scale(98%);
        }
    }
`;

export const PostModalHeader = styled.div``;

export default PostModal;
