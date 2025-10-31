import { type DateTimeFormatOptions, useFormatter } from 'next-intl';

type DateLike = Date | string | number;

export const useDateFormatter = (): ((
  date: DateLike,
  options?: DateTimeFormatOptions,
) => string) => {
  const formatter = useFormatter();

  return (
    date,
    options = { day: '2-digit', month: 'long', year: 'numeric' },
  ) => {
    return formatter.dateTime(
      typeof date === 'string' ? new Date(date) : date,
      options,
    );
  };
};
