'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export const useSearchState = (paramName: string, defaultValue?: string) => {
  const search = useSearchParams();

  const [value, setValue] = useState(search.get(paramName) ?? defaultValue);

  return [
    value,
    (newValue: string) => {
      const url = new URL(window.location.href);
      if (newValue) {
        url.searchParams.set(paramName, newValue.toString());
      } else {
        url.searchParams.delete(paramName);
      }
      window.history.replaceState({}, '', url.toString());
      setValue(newValue);
    },
  ] as const;
};
