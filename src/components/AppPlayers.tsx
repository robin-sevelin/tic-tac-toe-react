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
    <div className='form-container'>
      {players.length === 0 && (
        <form onSubmit={handleSubmit}>
          <div className='name-input'>
            {' '}
            <label htmlFor='input'>Player ✗ name</label>
          </div>
          <input type='text' id='input' onChange={handleChange} />
          <div className='submit-btn'>
            <button className='submit' disabled={userInput === ''}>
              Submit
            </button>
          </div>
        </form>
      )}
      {players.length === 1 && (
        <form onSubmit={handleSubmit}>
          <div className='name-input'>
            <label htmlFor='input'>Player ⭕️ name</label>
          </div>
          <input type='text' id='input' onChange={handleChange} />
          <div className='submit-btn'>
            <button className='submit' disabled={userInput === ''}>
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
