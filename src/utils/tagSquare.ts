import { Game } from '../models/Game';
import { checkDraw } from './checkDraw';
import { checkWin } from './checkWin';

export const tagSquare = (
  index: number,
  game: Game,
  setGame: (game: Game | ((prevGame: Game) => Game)) => void
) => {
  if (
    game.squares[index] !== '' ||
    game.players[0].hasWon ||
    game.players[1].hasWon
  ) {
    return;
  }
  const currentPlayer = game.currentPlayer === '✗' ? '⭕️' : '✗';
  const updatedSquares = [...game.squares];
  updatedSquares[index] = currentPlayer;

  setGame((game) => ({
    ...game,
    currentPlayer: currentPlayer,
    squares: updatedSquares,
  }));

  checkWin(updatedSquares, setGame);
  checkDraw(updatedSquares, setGame);
};
