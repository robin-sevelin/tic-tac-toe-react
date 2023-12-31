import { useState } from 'react';
import { Player } from '../models/Player';
import { AppButtons } from './AppButtons';
import { AppScores } from './AppScores';
import { AppSquare } from './AppSquare';
import { AppMessages } from './AppMessages';
import { IGameProps } from '../models/IGameProps';

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
      {!showScore && <AppMessages {...props} />}
      {!showScore && (
        <div className='board'>
          {props.squares.map((square, index) => (
            <div className='square-container' key={index}>
              <AppSquare
                square={square}
                index={index}
                {...props}
                onTagSquare={tagSquare}
              />
            </div>
          ))}
        </div>
      )}
      {showScore && <AppScores {...props} />}
      <AppButtons
        {...props}
        onScoreboard={scoreBoard}
        onEndSession={endSession}
        onRestart={restart}
      />
    </div>
  );
};
