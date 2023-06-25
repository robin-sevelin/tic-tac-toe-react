import { Player } from '../models/Player';

interface SquareProps {
  squares: string[];
  players: Player[];
  currentPlayer: string;
  onTagSquare: (index: number) => void;
}

export const AppSquare = ({
  squares,
  onTagSquare,
  players,
  currentPlayer,
}: SquareProps) => {
  const handleClick = (index: number) => {
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
      {currentPlayer === '✗' && <p>its {players[0].name}'s' turn</p>}
      {currentPlayer === '⭕️' && <p>its {players[1].name}'s' turn</p>}
      <div className='board'>{html}</div>
    </>
  );
};
