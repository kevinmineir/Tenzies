import styled from '@emotion/styled';

export const Dice = styled.button`
    max-width: 5rem;
    width: 20vw;
    max-height: 5rem;
    height: 15vh;
    box-shadow: 1px 1px 5px black;
    background-color: ${props => props.isClicked ? '#85ff22ff' : '#f5f5f5'};
    border-radius: 10px;
    color: black;
    font-size: clamp(1.3rem, 2vw,1.8rem);
    border: none;
    transition: background-color 0.5s ease-out;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.isClicked ? '#85ff22ff' : '#eeeeeeff'};
    }

    &:active{
        background-color: ${props => props.isClicked ? '#85ff22ff' : '#d8d7d7ff'};
        outline: 2px solid black;
    }

    @media (max-width: 632px) {
        display: ${(props) => (props.hidden ? "none" : "inline-block")};
    }
`