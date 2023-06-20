import { Player } from '../models/Player';

interface IGameProps {
  players: Player[];
  onEndSession: (players: Player[]) => void;
}

export const AppButtons = ({ players, onEndSession }: IGameProps) => {
  const handleClick = () => {
    onEndSession(players);
  };
  return (
    <>
      <button>Toggle scoreboard</button>
      <button>Restart game</button>
      <button onClick={handleClick}>End session</button>
    </>
  );
};
