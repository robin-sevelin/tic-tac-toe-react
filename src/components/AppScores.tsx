import { IGameProps } from '../models/IGameProps';

export const AppScores = (props: IGameProps) => {
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
