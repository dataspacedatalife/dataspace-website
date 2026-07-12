'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export type HistoryMode = 'push' | 'replace';

// Evento propio para que todas las instancias del hook se sincronicen
// cuando updateSearchParams escribe en la URL (popstate solo cubre back/forward)
const URL_CHANGE_EVENT = 'searchstate:change';

// Escribe varios parámetros en una única entrada del historial.
// Un valor vacío/null elimina el parámetro de la URL.
export function updateSearchParams(
  updates: Record<string, string | null | undefined>,
  mode: HistoryMode = 'replace',
) {
  const url = new URL(window.location.href);
  for (const [key, value] of Object.entries(updates)) {
    if (value) {
      url.searchParams.set(key, value);
    } else {
      url.searchParams.delete(key);
    }
  }
  if (mode === 'push') {
    window.history.pushState({}, '', url.toString());
  } else {
    window.history.replaceState({}, '', url.toString());
  }
  window.dispatchEvent(new Event(URL_CHANGE_EVENT));
}

export const useSearchState = (paramName: string, defaultValue?: string) => {
  const search = useSearchParams();

  const [value, setValue] = useState(search.get(paramName) ?? defaultValue);

  useEffect(() => {
    const sync = () => {
      const params = new URLSearchParams(window.location.search);
      setValue(params.get(paramName) ?? defaultValue);
    };
    window.addEventListener('popstate', sync);
    window.addEventListener(URL_CHANGE_EVENT, sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener(URL_CHANGE_EVENT, sync);
    };
  }, [paramName, defaultValue]);

  return [
    value,
    (newValue: string, mode: HistoryMode = 'replace') =>
      updateSearchParams({ [paramName]: newValue }, mode),
  ] as const;
};
