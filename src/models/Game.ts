import { Player } from './Player';

export class Game {
  constructor(
    public players: Player[],
    public squares: string[],
    public currentPlayer: string,
    public hasWin: boolean,
    public hasDraw: boolean
  ) {}
}
