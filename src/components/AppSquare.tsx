interface IProps {
  square: string;
  index: number;
  hasWin: boolean;
  onTagSquare: (index: number) => void;
}

export const AppSquare = (props: IProps) => {
  const handleClick = (index: number) => {
    props.onTagSquare(index);
  };

  return (
    <div className='square' onClick={() => handleClick(props.index)}>
      {props.square}
    </div>
  );
};
