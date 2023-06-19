import { AppSquare } from './AppSquare';

interface ISquareProps {
  squares: string[];
}

export const AppGame = ({ squares }: ISquareProps) => {
  const tagSquare = () => {
    console.log('hello');
  };
  return (
    <>
      <AppSquare squares={squares} onTagSquare={tagSquare} />
    </>
  );
};
