import { Player } from '../models/Player';

interface IGameProps {
  players: Player[];
  onEndSession: (players: Player[]) => void;
  onScoreboard: () => void;
  onRestart: () => void;
}

export const AppButtons = ({
  players,
  onEndSession,
  onScoreboard,
  onRestart,
}: IGameProps) => {
  const handleEndsession = () => {
    onEndSession(players);
  };

  const handleScoreboard = () => {
    onScoreboard();
  };

  const handleRestart = () => {
    onRestart();
  };
  return (
    <div className='nav-buttons'>
      <button onClick={handleScoreboard}>Toggle scoreboard</button>
      <button onClick={handleRestart}>Restart game</button>
      <button onClick={handleEndsession}>End session</button>
    </div>
  );
};
