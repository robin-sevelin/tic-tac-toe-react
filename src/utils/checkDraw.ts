import { Game } from '../models/Game';

export const checkDraw = (squares: string[], state: Game) => {
  if (squares.every((a) => a !== '')) {
    return {
      ...state,
      hasDraw: true,
    };
  } else {
    return;
  }
};
