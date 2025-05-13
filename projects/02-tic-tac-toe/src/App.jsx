import { Children } from 'react';
import './App.css'
import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Square } from './Components/Square';
import { TURNS } from './constants';
import { checkWinner, checkEndGame } from './logic/board';
import { WinnerModal } from './Components/WinnerModal';
import { Board } from './Components/Board';
import { resetGameStorage, saveGameToStorage } from './logic/storage';


function App() {


  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })


  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')  
    return turnFromStorage ?? TURNS.X
  });

  // null no hay ganador
  // false hay un empate
  // true hay un ganador
  const [winner, setWinner] = useState(null)


  const resetGame = () => {

    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index) => {

    // No actualizamos si tiene algo en esta posicion
    // Si board no esta a null da un true
    if (board[index] || winner) { return; }

    // Esto esta mal.. no hay que modificar nunca los props... puede luego dar problemas de renderizado
    //  board[index] = turn;

    // Actualizamos el tablero
    const newBoard = [...board]
    newBoard[index] = turn;
    setBoard(newBoard)

    // Cambiamos el turno
    const newTurn = turn === TURNS.O ? TURNS.X : TURNS.O;
    setTurn(newTurn);

    // Guardo la partida
    saveGameToStorage( { 
        board:newBoard,
        turn: newTurn
     } )

    // Comprobamos ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>

      <button onClick={resetGame}>Reiniciar el juego</button>

      <Board
        updateBoard={updateBoard}
        board={board}
      />

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
