import clsx from 'clsx';
import type React from 'react';

export const Card = <T extends React.ElementType = 'div'>({
  as: Component = 'div' as T,
  className,
  ...rest
}: React.PropsWithChildren<
  {
    as?: T;
  } & React.ComponentProps<T>
>) => {
  return (
    <Component
      {...rest}
      className={clsx(
        'relative bg-white border border-gray-300 rounded-3xl p-8 shadow-md',
        className,
      )}
    />
  );
};
