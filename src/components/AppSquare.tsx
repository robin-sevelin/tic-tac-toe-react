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
      <div className='board'>{html}</div>
    </>
  );
};
