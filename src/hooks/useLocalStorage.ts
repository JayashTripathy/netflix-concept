import { useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const isBrowser = typeof window !== "undefined";
  const [value, setValue] = useState<T | null>(() => {
    if (isBrowser) {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    }
  });

  useEffect(() => {
    if (value && isBrowser) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as const;
};
