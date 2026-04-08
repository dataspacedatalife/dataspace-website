import * as Headless from '@headlessui/react';
import { clsx } from 'clsx';
import { Link } from './link';

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-lg border border-transparent bg-gray-950 shadow-md', 
    'text-base font-medium whitespace-nowrap text-white',
    'disabled:bg-gray-950 disabled:opacity-40',
    'hover:bg-gray-500 transition-colors duration-200'
  ),
  secondary: clsx(
    'relative inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-lg border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15', 
    'after:absolute after:inset-0 after:rounded-lg after:shadow-[inset_0_0_2px_1px_#ffffff4d]',
    'text-base font-medium whitespace-nowrap text-gray-950',
    'disabled:bg-white/15 disabled:opacity-40',
    'hover:bg-white/20 transition-colors duration-200'
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-2 py-[calc(--spacing(1.5)-1px)]',
    'rounded-lg border border-transparent shadow-sm ring-1 ring-black/10', 
    'text-sm font-medium whitespace-nowrap text-gray-950',
    'disabled:bg-transparent disabled:opacity-40',
    'hover:bg-gray-50 transition-colors duration-200'
  ),
};

type ButtonProps = {
  variant?: keyof typeof variants;
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
);

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    'cursor-pointer disabled:cursor-not-allowed',
    variants[variant],
    className,
  );

  if (typeof props.href === 'undefined') {
    return <Headless.Button {...props} className={className} />;
  }

  return <Link {...props} className={className} />;
}
