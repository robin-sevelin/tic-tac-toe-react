import { Player } from '../models/Player';
import { AppButtons } from './AppButtons';
import { AppSquare } from './AppSquare';

interface IGameProps {
  squares: string[];
  onEndSession: (players: Player[]) => void;
}

export const AppGame = ({ squares, onEndSession }: IGameProps) => {
  const tagSquare = () => {
    console.log('hello');
  };

  const endSession = (players: Player[]) => {
    onEndSession(players);
  };
  return (
    <>
      <AppSquare squares={squares} onTagSquare={tagSquare} />
      <AppButtons onEndSession={endSession} players={[]} />
    </>
  );
};
