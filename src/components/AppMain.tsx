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

  return (
    <main>
      <AppGame squares={game.squares} />
      <AppPlayers onAddPlayer={addPlayer} players={game.players} />
    </main>
  );
};
