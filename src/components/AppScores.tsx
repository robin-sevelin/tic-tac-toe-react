import { useContext } from 'react';
import { GameContext } from '../contexts/gameContext';

export const AppScores = () => {
  const { game } = useContext(GameContext);
  return (
    <div className='scores'>
      <h2>Here are the current scores</h2>
      {game.players.map((player, index) => (
        <div key={index}>
          {player.name} {player.points} points
        </div>
      ))}
    </div>
  );
};
