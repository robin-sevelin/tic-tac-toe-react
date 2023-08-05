import { Player } from '../models/Player';

interface IProps {
  players: Player[];
  currentPlayer: string;
  hasWin: boolean;
  hasDraw: boolean;
}

export const AppMessages = ({
  players,
  currentPlayer,
  hasWin,
  hasDraw,
}: IProps) => {
  return (
    <div className='info'>
      {!hasWin && hasDraw && <p>Its a draw!</p>}
      {players[0].hasWon && <p>{players[0].name} has won the game 🥇 </p>}
      {players[1].hasWon && <p>{players[1].name} has won the game 🥇 </p>}
      {!hasWin && !hasDraw && currentPlayer !== '✗' && (
        <p>its {players[0].name}'s ✗ turn</p>
      )}
      {!hasWin && !hasDraw && currentPlayer !== '⭕️' && (
        <p>its {players[1].name}'s ⭕️ turn</p>
      )}
    </div>
  );
};
