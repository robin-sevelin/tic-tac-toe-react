import { Game } from '../models/Game';

export const checkDraw = (
  squares: string[],
  setGame: (game: Game | ((prevGame: Game) => Game)) => void
) => {
  if (squares.every((a) => a !== '')) {
    return setGame((game) => ({
      ...game,
      hasDraw: true,
    }));
  } else {
    return;
  }
};
