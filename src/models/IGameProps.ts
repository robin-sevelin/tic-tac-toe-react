import { IFunctionProps } from './IFunctionProps';
import { Player } from './Player';

export interface IGameProps extends IFunctionProps {
  squares: string[];
  players: Player[];
  currentPlayer: string;
  hasWin: boolean;
  hasDraw: boolean;
}
