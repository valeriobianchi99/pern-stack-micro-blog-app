import styled from "styled-components";

const Feed = styled.div`
margin: auto;
min-height: 100vh;
width: 90%;
max-width: 700px;
margin: 3rem auto 0;
display: flex;
flex-direction: column;
gap: 3rem;
h1 {
    text-align: center;
}
`;

export const StyledPost = styled.div`
background-color: ${({ theme }) => theme.elevation_1};
padding: 1rem 2rem;
border-radius: 5px;
box-shadow: ${({ theme }) => theme.shadow};
& > p {
    margin-top: 1rem;
}
`;

export const StyledPostHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 2px dotted gray;
padding-bottom: 1rem;
& > img {
    width: 70px;
    border-radius: 35px;
}
`;

export const StyledPostBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1rem;
    & > sub {
        opacity: 0.7;
        font-size: .8rem;
    }
`

export const StyledPostActions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem 0 1rem;
    & > button {
        padding: 1rem;
        outline: 0;
        border: 0;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        background-color: ${({ theme }) => theme.elevation_2};
    }
    & > button.comment {
        color:  ${({ theme }) => theme.primary};
    }
    & > button.delete {
        color: #b54a4a;
    }
    & > button:active {
        transform: scale(98%);
    }
`

export const LoadMoreButton = styled.div`
position: relative;
width: 150px;
height: 2rem;
margin: 2rem auto 4rem; 
padding: 1rem 2rem;
& > button {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.primary};
    color: white;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    font-size: 1.5rem;

}
& > button:active {
    transform: scale(98%);
}
`;

export default Feed;