interface IProps {
  square: string;
  index: number;
  hasWin: boolean;
  onTagSquare: (index: number) => void;
}

export const AppSquare = (props: IProps) => {
  const handleClick = (index: number) => {
    if (props.square[index] === '' || !props.hasWin) {
      props.onTagSquare(index);
    } else {
      return;
    }
  };

  return (
    <div className='square' onClick={() => handleClick(props.index)}>
      {props.square}
    </div>
  );
};
