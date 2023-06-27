import { Game } from '../models/Game';
import { AppPlayers } from './AppPlayers';
import { AppGame } from './AppGame';
import { Player } from '../models/Player';
import { useEffect, useState } from 'react';

export const AppMain = () => {
  const [game, setGame] = useState<Game>(
    new Game([], ['', '', '', '', '', '', '', '', ''], '✗', false, false)
  );

  useEffect(() => {
    const inLocalstorage = localStorage.getItem('board');
    if (inLocalstorage) {
      setGame(JSON.parse(inLocalstorage));
    }
  }, []);

  const addPlayer = (player: string) => {
    const newPlayer = [...game.players, new Player(player, 0, false)];
    setGame((game) => ({
      ...game,
      players: newPlayer,
    }));
  };

  const endSession = () => {
    setGame(
      new Game([], ['', '', '', '', '', '', '', '', ''], '✗', false, false)
    );
    localStorage.removeItem('board');
  };

  const restart = () => {
    const resetPlayers = [...game.players];
    resetPlayers.forEach((player) => {
      player.hasWon = false;
    });
    setGame((game) => ({
      ...game,
      squares: ['', '', '', '', '', '', '', '', ''],
      hasWin: false,
      hasDraw: false,
      players: resetPlayers,
    }));
  };

  const tagSquare = (index: number) => {
    const currentPlayer = game.currentPlayer === '✗' ? '⭕️' : '✗';
    const updatedSquares = [...game.squares];
    updatedSquares[index] = currentPlayer;

    setGame((game) => ({
      ...game,
      currentPlayer: currentPlayer,
      squares: updatedSquares,
    }));

    checkWin(updatedSquares);
    checkDraw(updatedSquares);

    localStorage.setItem('board', JSON.stringify(game));
  };

  const checkWin = (squares: string[]) => {
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
      const squareA = squares[a];
      const squareB = squares[b];
      const squareC = squares[c];

      if (squareA === '✗' && squareB === '✗' && squareC === '✗') {
        const updatedPlayers = [...game.players];
        updatedPlayers[0].points += 1;
        updatedPlayers[0].hasWon = true;

        return setGame((game) => ({
          ...game,
          hasWin: true,
          players: updatedPlayers,
        }));
      } else if (squareA === '⭕️' && squareB === '⭕️' && squareC === '⭕️') {
        const updatedPlayers = [...game.players];
        updatedPlayers[1].points += 1;
        updatedPlayers[1].hasWon = true;

        return setGame((prevGame) => ({
          ...prevGame,
          hasWin: true,
          players: updatedPlayers,
        }));
      }
    }
  };

  const checkDraw = (squares: string[]) => {
    if (squares.every((a) => a !== '')) {
      return setGame((game) => ({
        ...game,
        hasDraw: true,
      }));
    } else {
      return;
    }
  };

  console.log(game);

  return (
    <main>
      <AppPlayers onAddPlayer={addPlayer} players={game.players} />
      {game.players.length === 2 && (
        <AppGame
          onRestart={restart}
          onEndSession={endSession}
          onTagSquare={tagSquare}
          hasDraw={game.hasDraw}
          hasWin={game.hasWin}
          squares={game.squares}
          players={game.players}
          currentPlayer={game.currentPlayer}
        />
      )}
    </main>
  );
};
