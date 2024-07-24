import { winningCombinations } from '../constants/constants';
import { Game } from '../models/Game';

export const checkWin = (
  squares: string[],
  setGame: (game: Game | ((prevGame: Game) => Game)) => void
) => {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    const squareA = squares[a];
    const squareB = squares[b];
    const squareC = squares[c];

    if (squareA === '✗' && squareB === '✗' && squareC === '✗') {
      setGame((prevGame) => {
        const updatedPlayers = [...prevGame.players];
        updatedPlayers[0].points += 1;
        updatedPlayers[0].hasWon = true;

        return {
          ...prevGame,
          hasWin: true,
          players: updatedPlayers,
        };
      });
      return;
    } else if (squareA === '⭕️' && squareB === '⭕️' && squareC === '⭕️') {
      setGame((prevGame) => {
        const updatedPlayers = [...prevGame.players];
        updatedPlayers[1].points += 1;
        updatedPlayers[1].hasWon = true;

        return {
          ...prevGame,
          hasWin: true,
          players: updatedPlayers,
        };
      });
      return;
    }
  }
};
