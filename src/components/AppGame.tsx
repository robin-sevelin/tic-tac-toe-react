import { Player } from '../models/Player';
import { AppButtons } from './AppButtons';
import { AppSquare } from './AppSquare';

interface IGameProps {
  squares: string[];
  onEndSession: (players: Player[]) => void;
  onTagSquare: (square: string, index: number) => void;
}

export const AppGame = ({ squares, onEndSession, onTagSquare }: IGameProps) => {
  const tagSquare = (square: string, index: number) => {
    onTagSquare(square, index);
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
