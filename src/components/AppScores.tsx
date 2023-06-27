import { Player } from '../models/Player';

interface IGameProps {
  players: Player[];
}

export const AppScores = ({ players }: IGameProps) => {
  const html = players.map((player, index) => (
    <div key={index}>
      {player.name} {player.points} points
    </div>
  ));

  return (
    <div className='scores'>
      <h3>Here are the current scores</h3>
      {html}
    </div>
  );
};
