import { AppPlayers } from './AppPlayers';
import { AppGame } from './AppGame';
import { useContext } from 'react';
import { GameContext } from '../contexts/gameContext';
import { Actions } from '../reducers/GameReducer';

export const AppMain = () => {
  const { game, dispatch } = useContext(GameContext);
  // const [game, setGame] = useLocalStorage<Game>('game', emptyGame);

  const addPlayer = (player: string) => {
    dispatch({ type: Actions.ADD_PLAYER, payload: player });
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
