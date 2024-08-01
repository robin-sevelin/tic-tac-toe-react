import { useContext, useState } from 'react';
import { AppButtons } from './AppButtons';
import { AppScores } from './AppScores';
import { AppSquare } from './AppSquare';
import { AppMessages } from './AppMessages';
import { GameContext } from '../contexts/gameContext';
import { Actions } from '../reducers/GameReducer';
import { checkDraw } from '../utils/checkDraw';
import { checkWin } from '../utils/checkWin';

export const AppGame = () => {
  const { game, dispatch } = useContext(GameContext);
  const [showScore, setShowScore] = useState(false);

  const tagSquare = (index: number) => {
    const object = { game, index };
    dispatch({
      type: Actions.TAG_SQUARE,
      payload: JSON.stringify(object),
    });

    checkWin(game.squares, game);
    checkDraw(game.squares, game);
  };

  const scoreBoard = () => {
    setShowScore(!showScore);
  };
  return (
    <div className='main-content'>
      {!showScore && <AppMessages />}
      {!showScore && (
        <div className='board'>
          {game?.squares?.map((square, index) => (
            <div className='square-container' key={index}>
              <AppSquare
                square={square}
                index={index}
                onTagSquare={tagSquare}
              />
            </div>
          ))}
        </div>
      )}
      {showScore && <AppScores />}
      <AppButtons onScoreboard={scoreBoard} />
    </div>
  );
};
