interface SquareProps {
  squares: string[];
  onTagSquare: (square: string, index: number) => void;
}

export const AppSquare = ({ squares, onTagSquare }: SquareProps) => {
  const handleClick = (square: string, index: number) => {
    onTagSquare(square, index);
  };
  const html = squares.map((square, index) => (
    <div
      className='square'
      onClick={() => {
        handleClick(square, index);
      }}
      key={index}
    >
      {square}
      {index}
    </div>
  ));
  return <div className='board'> {html}</div>;
};
