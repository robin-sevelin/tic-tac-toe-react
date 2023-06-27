import { useState } from 'react';
import { Game } from '../models/Game';
import { AppPlayers } from './AppPlayers';
import { AppGame } from './AppGame';
import { Player } from '../models/Player';

export const AppMain = () => {
  const [game, setGame] = useState<Game>(
    new Game([], ['', '', '', '', '', '', '', '', ''], '✗', false)
  );

  const addPlayer = (player: string) => {
    const newPlayer = [...game.players, new Player(player, 0, false)];
    setGame((newGame) => ({
      ...newGame,
      players: newPlayer,
    }));
  };

  const endSession = () => {
    setGame(new Game([], ['', '', '', '', '', '', '', '', ''], '✗', false));
  };

  const restart = () => {
    const resetPlayers = [...game.players];
    resetPlayers.forEach((player) => {
      player.hasWon = false;
    });
    setGame((newGame) => ({
      ...newGame,
      squares: ['', '', '', '', '', '', '', '', ''],
      gameOver: false,
      players: resetPlayers,
    }));
  };

  const tagSquare = (index: number) => {
    const currentPlayer = game.currentPlayer === '✗' ? '⭕️' : '✗';
    const newSquares = [...game.squares];
    newSquares[index] = currentPlayer;

    setGame((newGame) => ({
      ...newGame,
      currentPlayer: currentPlayer,
      squares: newSquares,
    }));

    checkWin();
  };

  const checkWin = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      const squareA = game.squares[a];
      const squareB = game.squares[b];
      const squareC = game.squares[c];

      if (squareA === '✗' && squareB === '✗' && squareC === '✗') {
        const updatedPlayers = [...game.players];
        updatedPlayers[0].points += 1;
        updatedPlayers[0].hasWon = true;

        return setGame((newGame) => ({
          ...newGame,
          gameOver: true,
          players: updatedPlayers,
        }));
      } else if (squareA === '⭕️' && squareB === '⭕️' && squareC === '⭕️') {
        const updatedPlayers = [...game.players];
        updatedPlayers[1].points += 1;
        updatedPlayers[1].hasWon = true;

        return setGame((newGame) => ({
          ...newGame,
          gameOver: true,
          players: updatedPlayers,
        }));
      }
    }
  };

  return (
    <main>
      <AppPlayers onAddPlayer={addPlayer} players={game.players} />
      {game.players.length === 2 && (
        <AppGame
          onRestart={restart}
          onEndSession={endSession}
          onTagSquare={tagSquare}
          gameOver={game.gameOver}
          squares={game.squares}
          players={game.players}
          currentPlayer={game.currentPlayer}
        />
      )}
    </main>
  );
};
