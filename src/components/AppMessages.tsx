import { useContext } from 'react';
import { GameContext } from '../contexts/gameContext';

export const AppMessages = () => {
  const { game } = useContext(GameContext);
  return (
    <div className='info'>
      {/* {!game.hasWin && game.hasDraw && <p>Its a draw!</p>}
      {game.players[0].hasWon && (
        <p>{game.players[0].name} has won the game 🥇 </p>
      )}
      {game.players[1].hasWon && (
        <p>{game.players[1].name} has won the game 🥇 </p>
      )}
      {!game.hasWin && !game.hasDraw && game.currentPlayer !== '✗' && (
        <p>its {game.players[0].name}'s ✗ turn</p>
      )}
      {!game.hasWin && !game.hasDraw && game.currentPlayer !== '⭕️' && (
        <p>its {game.players[1].name}'s ⭕️ turn</p>
      )} */}
    </div>
  );
};
