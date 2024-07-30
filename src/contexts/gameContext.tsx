import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { Game } from '../models/Game';
import { emptyGame } from '../constants/constants';
import { GameAction, GameReducer } from '../reducers/GameReducer';

interface GameContext {
  game: Game;
  dispatch: Dispatch<GameAction>;
}

export const GameContext = createContext<GameContext>({
  game: emptyGame,
  dispatch: () => {
    return;
  },
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [game, dispatch] = useReducer(GameReducer, emptyGame);
  return (
    <GameContext.Provider value={{ game, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
