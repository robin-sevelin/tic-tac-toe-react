import { useState } from 'react';
import { Player } from '../models/Player';
import { AppButtons } from './AppButtons';
import { AppScores } from './AppScores';
import { AppSquare } from './AppSquare';

interface IGameProps {
  squares: string[];
  players: Player[];
  currentPlayer: string;
  onEndSession: (players: Player[]) => void;
  onTagSquare: (index: number) => void;
  onRestart: () => void;
}

export const AppGame = ({
  players,
  squares,
  currentPlayer,
  onEndSession,
  onTagSquare,
  onRestart,
}: IGameProps) => {
  const [showScore, setShowScore] = useState(false);
  const tagSquare = (index: number) => {
    onTagSquare(index);
  };

  const endSession = (players: Player[]) => {
    onEndSession(players);
  };

  const scoreBoard = () => {
    setShowScore(!showScore);
  };

  const restart = () => {
    onRestart();
  };
  return (
    <>
      {!showScore && (
        <AppSquare
          squares={squares}
          players={players}
          currentPlayer={currentPlayer}
          onTagSquare={tagSquare}
        />
      )}
      {showScore && <AppScores players={players} />}
      <AppButtons
        onRestart={restart}
        onEndSession={endSession}
        onScoreboard={scoreBoard}
        players={players}
      />
    </>
  );
};
