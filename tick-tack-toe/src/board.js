import { WINNER_COMBOS } from './constants'

export const checkWinner = boardToCheck => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a] //ganador es el que está en el primer elemento
    }
  }
  return null
}
export const checkEndGame = newBoard => {
  // habra empate si no hay espacios vacios en el letrero
  return newBoard.every(square => square !== null) //devuelve true o false
}
