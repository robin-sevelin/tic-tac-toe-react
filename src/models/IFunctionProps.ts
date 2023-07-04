import { Player } from './Player';

export interface IFunctionProps {
  onEndSession: (players: Player[]) => void;
  onTagSquare: (index: number) => void;
  onRestart: () => void;
}
