import { Player } from './Player';

export class Game {
  constructor(
    public players: Player[],
    public squares: string[],
    public currentPlayer: string,
    public gameOver: boolean,
    public hasWin: boolean
  ) {}
}
