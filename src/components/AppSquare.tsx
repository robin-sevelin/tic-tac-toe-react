interface SquareProps {
  squares: string[];
  onTagSquare: (square: string) => void;
}

export const AppSquare = ({ squares, onTagSquare }: SquareProps) => {
  const handleClick = (square: string) => {
    onTagSquare(square);
  };
  const html = squares.map((square, index) => {
    <div
      onClick={() => {
        handleClick(square);
      }}
      key={index}
    >
      {square}hej
    </div>;
  });

  return <>{html}</>;
};
