import { clsx } from 'clsx';
import type React from 'react';

export function Container({
  id,
  className,
  children,
  ref,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div id={id} className={clsx(className, 'px-6 lg:px-8')} ref={ref}>
      <div className="mx-auto max-w-2xl lg:max-w-7xl">{children}</div>
    </div>
  );
}
