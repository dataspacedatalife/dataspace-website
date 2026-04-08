import { clsx } from 'clsx';

type HeadingProps = {
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  dark?: boolean;
} & React.ComponentPropsWithoutRef<
  'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>;

/**
 * Heading
 * =======
 * Componente para todos los encabezados (h1-h6).
 *
 * Tipografía:
 * - h1: Barlow Condensed, color #199AB6 (para títulos principales)
 * - h2-h6: Barlow Condensed, color gris oscuro por defecto (text-gray-950)
 *
 * Otras clases:
 * - font-medium: grosor medio
 * - tracking-tighter: kerning más ajustado
 * - sm:text-6xl: escala responsiva en pantallas grandes
 * - data-dark:text-white: cambio de color automático si dark=true
 */
export function Heading({
  className,
  as: Element = 'h2',
  dark = false,
  ...props
}: HeadingProps) {
  // Determina las clases base según el tipo de heading
  const baseClass =
    Element === 'h1'
      ? 'font-heading text-[#199AB6] text-4xl font-medium tracking-tighter sm:text-6xl'
      : 'font-barlow-condensed text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl';

  return (
    <Element
      {...props}
      data-dark={dark ? 'true' : undefined}
      className={clsx(className, baseClass)}
    />
  );
}

/**
 * Subheading
 * ==========
 * Componente para subtítulos o encabezados secundarios.
 *
 * Tipografía:
 * - font-mono: tipografía monoespaciada
 * - text-xs/5: tamaño pequeño (extra small) con línea ajustada
 * - font-semibold: grosor seminegrita
 * - tracking-widest: kerning amplio para énfasis
 * - uppercase: convierte texto a mayúsculas
 * - text-gray-800 / data-dark:text-gray-600: color gris medio, se adapta a tema oscuro
 */
export function Subheading({
  className,
  as: Element = 'h2',
  dark = false,
  ...props
}: HeadingProps) {
  return (
    <Element
      {...props}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'font-mono text-xs/5 font-semibold tracking-widest text-gray-800 uppercase data-dark:text-gray-600',
      )}
    />
  );
}

/**
 * Lead
 * ====
 * Componente para párrafos destacados o introductores de sección.
 *
 * Tipografía:
 * - font-medium: grosor medio
 * - text-2xl: tamaño grande
 * - text-gray-500: color gris medio
 *
 * Uso típico: resaltar un lead o frase introductoria
 */
export function Lead({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      className={clsx(className, 'text-2xl font-medium text-gray-500')}
      {...props}
    />
  );
}