interface IProps {
  square: string;
  index: number;
  onTagSquare: (index: number) => void;
}

export const AppSquare = ({ onTagSquare, index, square }: IProps) => {
  const handleClick = (index: number) => {
    onTagSquare(index);
  };

  return (
    <div className='square' onClick={() => handleClick(index)}>
      {square}
    </div>
  );
};
