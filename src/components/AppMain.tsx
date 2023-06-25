import { useState } from 'react';
import { Game } from '../models/Game';
import { AppPlayers } from './AppPlayers';
import { AppGame } from './AppGame';
import { Player } from '../models/Player';

export const AppMain = () => {
  const [game, setGame] = useState<Game>(
    new Game([], ['', '', '', '', '', '', '', '', ''], '✗', false, false)
  );

  const addPlayer = (player: string) => {
    const newPlayer = [...game.players, new Player(player, 0)];
    setGame((newGame) => ({
      ...newGame,
      players: newPlayer,
    }));
  };

  const endSession = () => {
    setGame((newGame) => ({
      ...newGame,
      players: [],
      squares: ['', '', '', '', '', '', '', '', ''],
    }));
  };

  const restart = () => {
    setGame((newGame) => ({
      ...newGame,
      squares: ['', '', '', '', '', '', '', '', ''],
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
  };

  return (
    <main>
      <AppPlayers onAddPlayer={addPlayer} players={game.players} />
      {game.players.length === 2 && (
        <AppGame
          onRestart={restart}
          onEndSession={endSession}
          onTagSquare={tagSquare}
          squares={game.squares}
          players={game.players}
          currentPlayer={game.currentPlayer}
        />
      )}
    </main>
  );
};
