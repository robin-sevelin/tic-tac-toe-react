import { ChangeEvent, FormEvent, useState } from 'react';
import { Player } from '../models/Player';

interface IPlayerProps {
  players: Player[];
  onAddPlayer: (player: string) => void;
}

export const AppPlayers = ({ players, onAddPlayer }: IPlayerProps) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onAddPlayer(userInput);
    setUserInput('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  return (
    <>
      {players.length === 0 && (
        <form onSubmit={handleSubmit}>
          <label htmlFor='input'>Player ✗ name</label>
          <input type='text' id='input' onChange={handleChange} />
          <button disabled={userInput === ''}>Submit</button>
        </form>
      )}
      {players.length === 1 && (
        <form onSubmit={handleSubmit}>
          <label htmlFor='input'>Player ⭕️ name</label>
          <input type='text' id='input' onChange={handleChange} />
          <button disabled={userInput === ''}>Submit</button>
        </form>
      )}
    </>
  );
};
