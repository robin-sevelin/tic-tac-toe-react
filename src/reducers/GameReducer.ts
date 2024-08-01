import { emptyGame } from '../constants/constants';
import { Game } from '../models/Game';
import { Player } from '../models/Player';

export enum Actions {
  ADD_PLAYER,
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
    case Actions.ADD_PLAYER: {
      const newPlayer = [...game.players, new Player(action.payload, 0, false)];
      return {
        ...game,
        players: newPlayer,
      };
    }
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
    default: {
      return game;
    }
  }
};
