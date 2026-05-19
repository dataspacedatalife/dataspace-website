import { clsx } from 'clsx';

export function GradientBackground() {
  return (
    <div className="relative w-full h-10 md:h-12 overflow-hidden">
      {/* Gradiente decorativo antes del navbar */}
      <div
        className={clsx(
          'absolute inset-0',
          'bg-gradient-to-r from-[#3fd7c0] via-[#00a8b8] to-[#006b8f]',
          'rounded-full pointer-events-none',
          'opacity-90 transform-gpu',
        )}
        style={{
          filter: 'blur(20px)',
          margin: '-20px',
        }}
      />
    </div>
  );
}