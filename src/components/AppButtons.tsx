import { Player } from '../models/Player';

interface IProps {
  players: Player[];
  onEndSession: (players: Player[]) => void;
  onScoreboard: () => void;
  onRestart: () => void;
}

export const AppButtons = (props: IProps) => {
  const handleEndsession = () => {
    props.onEndSession(props.players);
  };

  const handleScoreboard = () => {
    props.onScoreboard();
  };

  const handleRestart = () => {
    props.onRestart();
  };
  return (
    <div className='nav-buttons'>
      <button onClick={handleScoreboard}>Scoreboard</button>
      <button onClick={handleRestart}>Restart game</button>
      <button onClick={handleEndsession}>End session</button>
    </div>
  );
};
