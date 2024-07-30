import { emptyGame, winningCombinations } from '../constants/constants';
import { Game } from '../models/Game';

export enum Actions {
  END_SESSION,
  RESTART,
  TAG_SQUARE,
  CHECK_DRAW,
  CHECK_WIN,
}

export interface GameAction {
  type: Actions;
  payload: string;
}

export const GameReducer = (game: Game, action: GameAction) => {
  switch (action.type) {
    case Actions.END_SESSION: {
      const resetGame = emptyGame;
      return resetGame;
    }
    case Actions.RESTART: {
      const resetPlayers = [...game.players];
      resetPlayers.forEach((player) => {
        player.hasWon = false;
      });
      const resetGame = {
        ...game,
        squares: emptyGame.squares,
        hasWin: false,
        hasDraw: false,
        players: resetPlayers,
      };

      return resetGame;
    }
    case Actions.TAG_SQUARE: {
      const { index } = JSON.parse(action.payload);

      if (
        game?.squares[index] !== '' ||
        game?.players[0]?.hasWon ||
        game?.players[1]?.hasWon
      ) {
        return game;
      }
      const currentPlayer = game.currentPlayer === '✗' ? '⭕️' : '✗';
      const updatedSquares = [...game.squares];
      updatedSquares[index] = currentPlayer;

      const updatedGame = {
        ...game,
        currentPlayer: currentPlayer,
        squares: updatedSquares,
      };
      return updatedGame;
    }

    case Actions.CHECK_DRAW: {
      const parsedGame = JSON.parse(action.payload) as Game;

      if (parsedGame.squares.every((a) => a !== '')) {
        return {
          ...game,
          hasDraw: true,
        };
      } else {
        return game;
      }
    }

    case Actions.CHECK_WIN: {
      const parsedGame = JSON.parse(action.payload) as Game;

      for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        const squareA = parsedGame.squares[a];
        const squareB = parsedGame.squares[b];
        const squareC = parsedGame.squares[c];

        if (squareA === '✗' && squareB === '✗' && squareC === '✗') {
          const updatedPlayers = [...game.players];
          updatedPlayers[0].points += 1;
          updatedPlayers[0].hasWon = true;

          return {
            ...game,
            hasWin: true,
            players: updatedPlayers,
          };
        } else if (
          squareA === '⭕️' &&
          squareB === '⭕️' &&
          squareC === '⭕️'
        ) {
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
    }
  }
};
