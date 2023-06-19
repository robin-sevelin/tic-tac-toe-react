import { Player } from './Player';
import { Square } from './Square';

export class Game {
  constructor(
    public players: Player[],
    public squares: Square[],
    public hasDraw: boolean,
    public hasWin: boolean
  ) {}
}
