interface SquareProps {
  squares: string[];
  onTagSquare: (square: string) => void;
}

export const AppSquare = ({ squares, onTagSquare }: SquareProps) => {
  const handleClick = (square: string) => {
    onTagSquare(square);
  };
  const html = squares.map((square, index) => (
    <div
      className='square'
      onClick={() => {
        handleClick(square);
      }}
      key={index}
    >
      {square}
    </div>
  ));
  return <div className='board'> {html}</div>;
};
