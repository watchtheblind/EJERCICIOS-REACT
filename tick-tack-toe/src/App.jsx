import { useState } from 'react'
import { Square } from './components/Square'
import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './board.js'
import { WinnerModal } from './components/WinnerModal.jsx'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null)) //estado a pasar para renderizar el talbeto
  const [turn, setTurn] = useState(TURNS.X) //estado para cambiar turnos
  const [winner, setWinner] = useState(null) //null = nadie ganó

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = index => {
    //no actualizamos esta posición si ya tiene algo 👇
    if (board[index] || winner) return
    const newBoard = [...board] //LOS ESTADOS Y LAS PROPS SON INMUTABLES PORQUE SINO PROBLEMAS DE RENDERIZADO
    newBoard[index] = turn
    setBoard(newBoard)
    const NewTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(NewTurn)
    //revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) //empate
    }
  }
  return (
    <>
      <main className='board'>
        <h1>tic tac toe</h1>
        <button onClick={resetGame}>Reset del juego</button>
        <section className='game'>
          {board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })}
        </section>
        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>
        {/* renderizar si ganador */}
        <WinnerModal
          winner={winner}
          resetGame={resetGame}
        />
      </main>
    </>
  )
}

export default App
