import { useState } from 'react';
import { Player } from '../models/Player';
import { AppButtons } from './AppButtons';
import { AppScores } from './AppScores';
import { AppSquare } from './AppSquare';
import { IGameProps } from '../models/IGameProps';
import { AppMessages } from './AppMessages';

export const AppGame = (props: IGameProps) => {
  const [showScore, setShowScore] = useState(false);
  const tagSquare = (index: number) => {
    props.onTagSquare(index);
  };

  const endSession = (players: Player[]) => {
    props.onEndSession(players);
  };

  const scoreBoard = () => {
    setShowScore(!showScore);
  };

  const restart = () => {
    props.onRestart();
  };
  return (
    <div className='main-content'>
      {!showScore && <AppMessages {...props} onTagSquare={tagSquare} />}
      {!showScore && <AppSquare {...props} onTagSquare={tagSquare} />}
      {showScore && <AppScores {...props} />}
      <AppButtons
        onRestart={restart}
        onEndSession={endSession}
        onScoreboard={scoreBoard}
        players={props.players}
      />
    </div>
  );
};
