import styled from "@emotion/styled";

export const Tenzies = styled.div`
    padding-top: 3rem;
`

export const Container = styled.div`
    display: flex;
    padding-top: 1rem;
    background-color: #f5f5f5;
    height: 90vh;
    max-height: fit-content;
    padding-bottom: 1rem;
    width: 70vw;
    max-width: 40rem;
    align-self: center;
    justify-self: center;
    border-radius: 0px 0px 10px 10px;
    flex-direction: column;
`

export const DiceContainer = styled.div`
    display: grid;
    grid-template: auto auto / repeat(5,1fr);
   background-color:black;
   color: white;

   &:hover{
    background-color: #3f3b3bff;
   }

   &:active{
    background-color: black;
   }
`

export const Description = styled.div`
   color:black;
   font-size: 1.35rem;
   font-family: Arial, Helvetica, sans-serif;
   max-width: 23.5rem;
   align-self: center;
   text-align: center;
   padding-bottom: 2rem;
   padding-top: 0.5rem;
   font-style: italic;
`

export const winText = styled.div`
   color:black;
   font-size: 2.5rem;
   font-family: Arial, Helvetica, sans-serif;
   align-self: center;
   text-align: center;
   padding-top: 1rem;
   font-style: italic;
`