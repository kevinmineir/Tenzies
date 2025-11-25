import * as S from "./Styles.js"
import { TenziesHeader } from "../Header/Index.jsx"
import {Dice} from "../Dices/Index.jsx"
import React from "react"
import {nanoid} from 'nanoid'

export function TenziesApp() {
  const [numeros,setNumeros] = React.useState(newDices())
  let gameWon = false
  if (numeros.every(dado => dado.isClicked === true)
    &&
    numeros.every(dado => dado.numero === numeros[0].numero))
    {
   gameWon = true
  }

  function newDices() {
     return new Array(10)
     .fill(0)
     .map(() => ({
      numero: Math.ceil(Math.random() * 9),
      isClicked: false,
      id: nanoid()
     }))
  }
  
  function rollDice() {
   setNumeros(prevDados => prevDados.map(dado => dado.isClicked === true ? dado : {...dado, numero : Math.ceil(Math.random() * 9)} ))
  }

  function holdDice(Id) {
     setNumeros(prev => 
      prev.map(dado => dado.id === Id ? {...dado, isClicked: !dado.isClicked} : dado) 
   )
  }

  return(
      <>
      <S.Tenzies>
         <TenziesHeader/>

         <S.Container>
            
         <S.Description>Roll Untill All Dice Are The Same. Click Each Dice To Freeze At Its Current Value Between Rolls.</S.Description>
         
         <S.DiceContainer>

            {numeros.map((dice) => (
               <Dice 
               isClicked={dice.isClicked} 
               hold={holdDice} 
               key={dice.id} 
               Numero={numeros.includes('?') ? '?' : dice.numero}
               id={dice.id}>
               </Dice>
               ))}

            </S.DiceContainer>

            {gameWon === true ? <S.winText>You Won !</S.winText> : undefined}

            <S.NewDiceButton onClick={gameWon === true ? () => setNumeros(newDices()) : () => rollDice()}>{gameWon === true ? 'New Game' : 'Generate New Dices'}</S.NewDiceButton>
         </S.Container> 
      </S.Tenzies>
      </>
    )
}