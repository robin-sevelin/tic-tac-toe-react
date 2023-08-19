import { useEffect, useState } from 'react';
import { Game } from '../models/Game';

const getValue = (key: string, initialValue: Game) => {
  const savedValue = JSON.parse(localStorage.getItem(key) || 'null');
  if (savedValue !== null) {
    return savedValue;
  }

  return initialValue;
};

export const useLocalStorage = <T>(key: string, initialValue: Game) => {
  const [value, setValue] = useState<T>(() => {
    return getValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
};
