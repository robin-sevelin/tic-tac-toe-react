import { winningCombinations } from '../constants/constants';
import { Game } from '../models/Game';

export const checkWin = (squares: string[], game: Game) => {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    const squareA = squares[a];
    const squareB = squares[b];
    const squareC = squares[c];
    console.log(game.players);

    if (squareA === '✗' && squareB === '✗' && squareC === '✗') {
      const updatedPlayers = [...game.players];

      updatedPlayers[0].points += 1;
      updatedPlayers[0].hasWon = true;

      return {
        ...game,
        hasWin: true,
        players: updatedPlayers,
      };
    } else if (squareA === '⭕️' && squareB === '⭕️' && squareC === '⭕️') {
      const updatedPlayers = [...game.players];
      updatedPlayers[1].points += 1;
      updatedPlayers[1].hasWon = true;

      return {
        ...game,
        hasWin: true,
        players: updatedPlayers,
      };
    }
  }
};
