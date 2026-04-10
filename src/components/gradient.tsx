import { clsx } from 'clsx';

export function GradientBackground() {
  return (
    <div className="relative w-full h-10 md:h-12 overflow-hidden">
      {/* Gradiente decorativo antes del navbar */}
      <div
        className={clsx(
          'absolute inset-0',
          'bg-gradient-to-r from-[#24B678] via-[#12BFD1] to-[#00AEEC]',
          'rounded-full pointer-events-none',
          'opacity-90 transform-gpu',
        )}
        style={{
          filter: 'blur(20px)',
          margin: '-10px',
        }}
      />
    </div>
  );
}