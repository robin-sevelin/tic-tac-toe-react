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
  console.log(players);

  return (
    <div className='scores'>
      <h2>Here are the current scores</h2>
      {html}
    </div>
  );
};
