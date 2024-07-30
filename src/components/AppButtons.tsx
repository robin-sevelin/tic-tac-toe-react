import { useContext } from 'react';
import { GameContext } from '../contexts/gameContext';
import { Actions } from '../reducers/GameReducer';

interface IProps {
  onScoreboard: () => void;
}

export const AppButtons = ({ onScoreboard }: IProps) => {
  const { game, dispatch } = useContext(GameContext);
  const handleEndsession = () => {
    dispatch({ type: Actions.END_SESSION, payload: JSON.stringify(game) });
  };

  const handleScoreboard = () => {
    onScoreboard();
  };

  const handleRestart = () => {
    dispatch({ type: Actions.RESTART, payload: JSON.stringify(game) });
  };
  return (
    <div className='nav-buttons'>
      <button onClick={handleScoreboard}>Scoreboard</button>
      <button onClick={handleRestart}>Restart game</button>
      <button onClick={handleEndsession}>End session</button>
    </div>
  );
};
