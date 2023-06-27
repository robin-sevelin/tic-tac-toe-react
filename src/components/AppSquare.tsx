import { Player } from '../models/Player';

interface SquareProps {
  squares: string[];
  players: Player[];
  currentPlayer: string;
  gameOver: boolean;
  onTagSquare: (index: number) => void;
}

export const AppSquare = ({
  squares,
  onTagSquare,
  players,
  currentPlayer,
  gameOver,
}: SquareProps) => {
  const handleClick = (index: number) => {
    if (squares[index] === '' && gameOver === false) {
      onTagSquare(index);
    }
    return;
  };

  const html = squares.map((square, index) => (
    <div
      className='square'
      onClick={() => {
        handleClick(index);
      }}
      key={index}
    >
      {square}
    </div>
  ));
  return (
    <>
      {players[0].hasWon && <p>{players[0].name} has won the game 🥇 </p>}
      {players[1].hasWon && <p>{players[1].name} has won the game 🥇 </p>}
      {!gameOver && currentPlayer === '✗' && (
        <p>its {players[0].name}'s' turn</p>
      )}
      {!gameOver && currentPlayer === '⭕️' && (
        <p>its {players[1].name}'s' turn</p>
      )}
      <div className='board'>{html}</div>
    </>
  );
};
