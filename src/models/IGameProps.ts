import { Player } from './Player';

export interface IGameProps {
  players: Player[];
  currentPlayer: string;
  hasWin: boolean;
  hasDraw: boolean;
  squares: string[];
  onTagSquare: (index: number) => void;
  onRestart: () => void;
  onEndSession: (players: Player[]) => void;
}
