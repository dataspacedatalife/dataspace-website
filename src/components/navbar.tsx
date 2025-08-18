'use client';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { motion } from 'motion/react';
import { Link } from './link';
import { Logo } from './logo';
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid';

const links = [
  { href: '/how', label: 'Participa' },
  { href: '/use-cases', label: 'Casos de uso' },
  { href: '/team', label: 'El equipo' },
];

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      {/* Dropdown: El demostrador */}
      <PlusGridItem className="relative group flex">
        <Link
          href="/about"
          className="flex items-center px-4 py-3 text-base font-medium text-gray-950 cursor-pointer"
        >
          Centro demostrador
        </Link>
        <div className="absolute left-0 top-full hidden w-48 flex-col rounded-lg border border-gray-200 bg-white shadow-md group-hover:flex">
          <Link
            href="/about"
            className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
          >
            Saber más
          </Link>
          <Link
            href="/what"
            className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
          >
            ¿Qué es un espacio de datos?
          </Link>
          {/* <Link
            href="/why"
            className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
          >
            ¿Por qué?
          </Link> */}
        </div>
      </PlusGridItem>

      {/* Other links */}
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5"
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
    </nav>
  );
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  );
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {/* El demostrador dropdown mimic */}
        <motion.div
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Link href="/about" className="text-base font-medium text-gray-950">
            El demostrador
          </Link>
          <div className="ml-4 mt-2 flex flex-col gap-2">
            <Link href="/about" className="text-sm text-gray-800">
              Saber más
            </Link>
            <Link href="/what" className="text-sm text-gray-800">
              ¿Qué es un espacio de datos?
            </Link>
            {/* <Link href="/why" className="text-sm text-gray-800">
              ¿Por qué un espacio de datos?
            </Link> */}
          </div>
        </motion.div>

        {/* Other nav links */}
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-gray-950">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  );
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="pt-8 sm:pt-12">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
              <Link href="/" title="Home">
                <div className="flex flex-row items-center gap-2 text-gray-950">
                  <Logo className="h-9" />
                  <div className="text-3xl">DATALife | CESGA</div>
                </div>
              </Link>
            </PlusGridItem>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  );
}
