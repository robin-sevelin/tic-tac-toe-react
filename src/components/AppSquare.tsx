import { Player } from '../models/Player';

interface SquareProps {
  squares: string[];
  players: Player[];
  currentPlayer: string;
  hasWin: boolean;
  hasDraw: boolean;
  onTagSquare: (index: number) => void;
}

export const AppSquare = ({
  squares,
  onTagSquare,
  players,
  currentPlayer,
  hasWin,
  hasDraw,
}: SquareProps) => {
  const handleClick = (index: number) => {
    if (squares[index] !== '' || hasWin) {
      return;
    }
    onTagSquare(index);
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
      <div className='info'>
        {!hasWin && hasDraw && <p>Its a draw!</p>}
        {players[0].hasWon && <p>{players[0].name} has won the game 🥇 </p>}
        {players[1].hasWon && <p>{players[1].name} has won the game 🥇 </p>}
        {!hasWin && !hasDraw && currentPlayer !== '✗' && (
          <p>its {players[0].name}'s' ✗ turn</p>
        )}
        {!hasWin && !hasDraw && currentPlayer !== '⭕️' && (
          <p>its {players[1].name}'s ⭕️ turn</p>
        )}
      </div>
      <div className='board'>{html}</div>
    </>
  );
};
