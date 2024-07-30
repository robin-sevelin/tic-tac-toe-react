import { Game } from '../models/Game';
import { AppPlayers } from './AppPlayers';
import { AppGame } from './AppGame';
import { Player } from '../models/Player';
import { useLocalStorage } from '../hooks/useStorage';
import { emptyGame } from '../constants/constants';

export const AppMain = () => {
  const [game, setGame] = useLocalStorage<Game>('game', emptyGame);

  const addPlayer = (player: string) => {
    const newPlayer = [...game.players, new Player(player, 0, false)];
    setGame((game) => ({
      ...game,
      players: newPlayer,
    }));
  };

  return (
    <main>
      {game.players.length === 2 ? (
        <AppGame />
      ) : (
        <AppPlayers onAddPlayer={addPlayer} players={game.players} />
      )}
    </main>
  );
};
