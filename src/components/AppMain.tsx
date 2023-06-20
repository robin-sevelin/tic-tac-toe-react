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
    setGame((prevGame) => ({
      ...prevGame,
      players: newPlayer,
    }));
  };

  const endSession = () => {
    setGame((prevGame) => ({
      ...prevGame,
      players: [],
    }));
  };
  console.log(game);

  return (
    <main>
      <AppPlayers onAddPlayer={addPlayer} players={game.players} />
      {game.players.length === 2 && (
        <AppGame onEndSession={endSession} squares={game.squares} />
      )}
    </main>
  );
};
