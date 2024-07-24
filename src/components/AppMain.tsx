import { Game } from '../models/Game';
import { AppPlayers } from './AppPlayers';
import { AppGame } from './AppGame';
import { Player } from '../models/Player';
import { useLocalStorage } from '../hooks/useStorage';
import { emptyGame } from '../constants/constants';
import { checkWin } from '../utils/checkWin';
import { checkDraw } from '../utils/checkDraw';

export const AppMain = () => {
  const [game, setGame] = useLocalStorage<Game>('game', emptyGame);

  const addPlayer = (player: string) => {
    const newPlayer = [...game.players, new Player(player, 0, false)];
    setGame((game) => ({
      ...game,
      players: newPlayer,
    }));
  };

  const endSession = () => {
    setGame(emptyGame);
  };

  const restart = () => {
    const resetPlayers = [...game.players];
    resetPlayers.forEach((player) => {
      player.hasWon = false;
    });
    setGame((game) => ({
      ...game,
      squares: emptyGame.squares,
      hasWin: false,
      hasDraw: false,
      players: resetPlayers,
    }));
  };

  const tagSquare = (index: number) => {
    if (
      game.squares[index] !== '' ||
      game.players[0].hasWon ||
      game.players[1].hasWon
    ) {
      return;
    }
    const currentPlayer = game.currentPlayer === '✗' ? '⭕️' : '✗';
    const updatedSquares = [...game.squares];
    updatedSquares[index] = currentPlayer;

    setGame((game) => ({
      ...game,
      currentPlayer: currentPlayer,
      squares: updatedSquares,
    }));

    checkWin(updatedSquares, setGame);
    checkDraw(updatedSquares, setGame);
  };

  return (
    <main>
      {game.players.length === 2 ? (
        <AppGame
          onRestart={restart}
          onEndSession={endSession}
          onTagSquare={tagSquare}
          {...game}
        />
      ) : (
        <AppPlayers onAddPlayer={addPlayer} players={game.players} />
      )}
    </main>
  );
};
