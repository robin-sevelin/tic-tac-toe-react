import { Player } from '../models/Player';

interface IProps {
  players: Player[];
}

export const AppScores = (props: IProps) => {
  return (
    <div className='scores'>
      <h2>Here are the current scores</h2>
      {props.players.map((player, index) => (
        <div key={index}>
          {player.name} {player.points} points
        </div>
      ))}
    </div>
  );
};
