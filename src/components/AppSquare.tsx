import { IGameProps } from '../models/IGameProps';

export const AppSquare = (props: IGameProps) => {
  const handleClick = (index: number) => {
    if (props.squares[index] !== '' || props.hasWin) {
      return;
    }
    props.onTagSquare(index);
  };

  const html = props.squares.map((square, index) => (
    <div
      className='square'
      onClick={() => {
        handleClick(index);
      }}
      key={index}
    >
      {square}
    </div>
  ));
  return (
    <>
      <div className='info'>
        {!props.hasWin && props.hasDraw && <p>Its a draw!</p>}
        {props.players[0].hasWon && (
          <p>{props.players[0].name} has won the game 🥇 </p>
        )}
        {props.players[1].hasWon && (
          <p>{props.players[1].name} has won the game 🥇 </p>
        )}
        {!props.hasWin && !props.hasDraw && props.currentPlayer !== '✗' && (
          <p>its {props.players[0].name}'s ✗ turn</p>
        )}
        {!props.hasWin && !props.hasDraw && props.currentPlayer !== '⭕️' && (
          <p>its {props.players[1].name}'s ⭕️ turn</p>
        )}
      </div>
      <div className='board'>{html}</div>
    </>
  );
};
