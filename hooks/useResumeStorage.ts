'use client';
import { useState, useEffect } from 'react';

export function useResumeStorage<T>(key: string, initial: T): [T, (data: T) => void] {
  const [data, setData] = useState<T>(initial);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        setData(JSON.parse(stored));
      } catch {
        // パースエラーは無視
      }
    }
  }, [key]);

  const update = (newData: T) => {
    setData(newData);
    localStorage.setItem(key, JSON.stringify(newData));
  };

  return [data, update];
}
