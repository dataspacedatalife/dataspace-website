import type { Locale } from 'next-intl';
import {
  beachContextPoints,
  beachSightings,
  sightingsByFortnight,
  sightingYears,
  topBeachSightings,
} from './carabelas-sightings-data';

const SERIES_COLORS = ['#2a78d6', '#eb6834', '#1baf7a'];
const GRID_COLOR = '#e4e3df';
const TICK_COLOR = '#52514e';
const CONTEXT_COLOR = '#b4b2ac';
const MARK_COLOR = '#2a78d6';

interface ChartLabels {
  months: Record<'jun' | 'jul' | 'aug' | 'sep' | 'oct', string>;
  showNumbers: string;
  fortnightTitle: string;
  fortnightDescription: string;
  year: string;
  fortnight: string;
  total: string;
  mapTitle: string;
  mapDescription: string;
  sightings: string;
  beach: string;
  town: string;
  /** Texto del tooltip de cada playa del mapa. */
  beachTooltip: (name: string, town: string, count: number) => string;
}

const LABELS: Record<Locale, ChartLabels> = {
  es: {
    months: { jun: 'jun', jul: 'jul', aug: 'ago', sep: 'sep', oct: 'oct' },
    showNumbers: 'Ver los números',
    fortnightTitle: 'Cuándo: la temporada es agosto',
    fortnightDescription:
      'Avistamientos por quincena, apilados por año. La temporada apenas existe antes de mediados de julio, se dispara durante agosto y está prácticamente terminada a finales de septiembre; y se ha repetido en las mismas semanas tres años seguidos, cada uno con más registros que el anterior.',
    year: 'Año',
    fortnight: 'quincena',
    total: 'total',
    mapTitle: 'Dónde: la costa norte',
    mapDescription:
      'Cada playa catalogada de Galicia es un punto gris, así que el contorno que se ve es la propia costa. Los círculos azules son playas con avistamientos, con el tamaño según cuántos. El patrón es inconfundible: las llegadas se concentran en la costa cantábrica, orientada al norte, y en el entorno de A Coruña, mientras que las Rías Baixas, abrigadas, quedan casi limpias.',
    sightings: 'avistamientos',
    beach: 'playa',
    town: 'concello',
    beachTooltip: (name, town, count) =>
      `${name} (${town}) — ${count} ${count === 1 ? 'avistamiento' : 'avistamientos'}`,
  },
  en: {
    months: { jun: 'Jun', jul: 'Jul', aug: 'Aug', sep: 'Sep', oct: 'Oct' },
    showNumbers: 'Show the numbers',
    fortnightTitle: 'When: the season is August',
    fortnightDescription:
      'Sightings per fortnight, stacked by year. The season barely exists before mid-July, spikes through August and is practically over by the end of September; and it has repeated itself in the same weeks three years running, each one with more records than the last.',
    year: 'Year',
    fortnight: 'fortnight',
    total: 'total',
    mapTitle: 'Where: the north coast',
    mapDescription:
      'Every catalogued beach in Galicia is a grey dot, so the outline you see is the coastline itself. The blue circles are beaches with sightings, sized by how many. The pattern is unmistakable: arrivals concentrate on the north-facing Cantabrian coast and around A Coruña, while the sheltered Rías Baixas stay almost clean.',
    sightings: 'sightings',
    beach: 'beach',
    town: 'municipality',
    beachTooltip: (name, town, count) =>
      `${name} (${town}) — ${count} ${count === 1 ? 'sighting' : 'sightings'}`,
  },
  gl: {
    months: { jun: 'xuñ', jul: 'xul', aug: 'ago', sep: 'set', oct: 'out' },
    showNumbers: 'Ver os números',
    fortnightTitle: 'Cando: a tempada é agosto',
    fortnightDescription:
      'Avistamentos por quincena, apilados por ano. A tempada apenas existe antes de mediados de xullo, dispárase durante agosto e está practicamente rematada a finais de setembro; e repetiuse nas mesmas semanas tres anos seguidos, cada un con máis rexistros que o anterior.',
    year: 'Ano',
    fortnight: 'quincena',
    total: 'total',
    mapTitle: 'Onde: a costa norte',
    mapDescription:
      'Cada praia catalogada de Galicia é un punto gris, así que o contorno que se ve é a propia costa. Os círculos azuis son praias con avistamentos, co tamaño segundo cantos. O patrón é inconfundible: as chegadas concéntranse na costa cantábrica, orientada ao norte, e na contorna da Coruña, mentres que as Rías Baixas, abrigadas, quedan case limpas.',
    sightings: 'avistamentos',
    beach: 'praia',
    town: 'concello',
    beachTooltip: (name, town, count) =>
      `${name} (${town}) — ${count} ${count === 1 ? 'avistamento' : 'avistamentos'}`,
  },
};

function FigureCaption({ title, text }: { title: string; text: string }) {
  return (
    <>
      <h3 className="text-xl font-semibold mt-5 mb-2">{title}</h3>
      <p className="text-gray-700 text-base leading-relaxed">{text}</p>
    </>
  );
}

function Details({
  summary,
  children,
}: {
  summary: string;
  children: React.ReactNode;
}) {
  return (
    <details className="mt-3 text-sm">
      <summary className="cursor-pointer text-gray-600">{summary}</summary>
      <table className="mt-3 w-full border-collapse tabular-nums">
        {children}
      </table>
    </details>
  );
}

const CELL = 'border border-gray-200 px-2 py-1 text-left';
const HEAD_CELL = `${CELL} bg-gray-50 font-medium`;

/**
 * Avistamientos por quincena y año: barras apiladas, una barra por quincena
 * de la temporada (junio–octubre) y un color por año.
 */
export function SightingsByFortnightChart({ locale }: { locale: Locale }) {
  const t = LABELS[locale];

  // Lienzo y área de dibujo (coordenadas del viewBox, no píxeles).
  const width = 720;
  const height = 300;
  const left = 38;
  const right = 708;
  const top = 16;
  const baseline = 254;

  const totals = sightingsByFortnight.map((b) =>
    b.counts.reduce((a, c) => a + c, 0),
  );
  const yMax = Math.max(100, Math.ceil(Math.max(...totals) / 100) * 100);
  const scale = (baseline - top) / yMax;
  const band = (right - left) / sightingsByFortnight.length;
  const barWidth = band * 0.62;

  const gridLines = Array.from({ length: yMax / 100 + 1 }, (_, i) => i * 100);

  return (
    <figure className="my-10">
      <FigureCaption title={t.fortnightTitle} text={t.fortnightDescription} />

      <div className="mt-4 mb-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600">
        <span className="text-gray-500">{t.year}</span>
        {sightingYears.map((year, i) => (
          <span key={year} className="inline-flex items-center gap-1.5">
            <span
              className="inline-block h-3 w-3 rounded-sm"
              style={{ background: SERIES_COLORS[i] }}
            />
            {year}
          </span>
        ))}
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={t.fortnightTitle}
        className="block h-auto w-full overflow-visible"
      >
        {gridLines.map((value) => {
          const y = baseline - value * scale;
          return (
            <g key={value}>
              <line
                x1={left}
                y1={y}
                x2={right}
                y2={y}
                stroke={GRID_COLOR}
                strokeWidth={1}
              />
              <text
                x={left - 7}
                y={y + 3.5}
                textAnchor="end"
                fontSize={11}
                fill={TICK_COLOR}
              >
                {value}
              </text>
            </g>
          );
        })}

        {sightingsByFortnight.map((bucket, index) => {
          const center = left + band * index + band / 2;
          const label = `${t.months[bucket.month]} ${bucket.days}`;
          const total = totals[index];
          // Los segmentos se apilan desde la base; cada uno cede 2 unidades por
          // abajo para que se distinga del que tiene debajo.
          let cursor = baseline;

          return (
            <g key={label}>
              {bucket.counts.map((count, series) => {
                if (count === 0) return null;
                const slotTop = cursor - count * scale;
                const isBottom = cursor === baseline;
                const isTop = bucket.counts.slice(series + 1).every((c) => !c);
                const barHeight = Math.max(
                  1,
                  count * scale - (isBottom ? 0 : 2),
                );
                cursor = slotTop;

                return (
                  <g key={sightingYears[series]}>
                    <title>{`${label} · ${sightingYears[series]}: ${count}`}</title>
                    <rect
                      x={center - barWidth / 2}
                      y={slotTop}
                      width={barWidth}
                      height={barHeight}
                      rx={isTop ? 4 : 0}
                      ry={isTop ? 4 : 0}
                      fill={SERIES_COLORS[series]}
                    />
                  </g>
                );
              })}

              {total > 0 && (
                <text
                  x={center}
                  y={cursor - 6}
                  textAnchor="middle"
                  fontSize={11}
                  fill={TICK_COLOR}
                  className="tabular-nums"
                >
                  {total}
                </text>
              )}

              <text
                x={center}
                y={baseline + 16}
                textAnchor="middle"
                fontSize={11}
                fill={TICK_COLOR}
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>

      <Details summary={t.showNumbers}>
        <thead>
          <tr>
            <th className={HEAD_CELL}>{t.fortnight}</th>
            {sightingYears.map((year) => (
              <th key={year} className={HEAD_CELL}>
                {year}
              </th>
            ))}
            <th className={HEAD_CELL}>{t.total}</th>
          </tr>
        </thead>
        <tbody>
          {sightingsByFortnight.map((bucket, index) => (
            <tr key={`${bucket.month}-${bucket.days}`}>
              <td
                className={CELL}
              >{`${t.months[bucket.month]} ${bucket.days}`}</td>
              {bucket.counts.map((count, series) => (
                <td key={sightingYears[series]} className={CELL}>
                  {count}
                </td>
              ))}
              <td className={CELL}>{totals[index]}</td>
            </tr>
          ))}
        </tbody>
      </Details>
    </figure>
  );
}

/**
 * Mapa de avistamientos por playa: cada playa catalogada de Galicia es un punto
 * gris (el contorno resultante es la propia costa) y las playas con
 * avistamientos son círculos azules dimensionados por número de avisos.
 */
export function SightingsMapChart({ locale }: { locale: Locale }) {
  const t = LABELS[locale];
  const legend: [number, number][] = [
    [1, 4],
    [5, 6.1],
    [20, 9.7],
  ];

  return (
    <figure className="my-10">
      <FigureCaption title={t.mapTitle} text={t.mapDescription} />

      <svg
        viewBox="0 0 720 560"
        role="img"
        aria-label={t.mapTitle}
        className="mt-4 block h-auto w-full rounded-lg border border-gray-200 bg-white"
      >
        {beachContextPoints.map(([x, y]) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={1.9}
            fill={CONTEXT_COLOR}
          />
        ))}

        {beachSightings.map((beach) => (
          <g key={`${beach.name}-${beach.town}`} className="group">
            <title>{t.beachTooltip(beach.name, beach.town, beach.count)}</title>
            <circle
              cx={beach.x}
              cy={beach.y}
              r={beach.r}
              fill={MARK_COLOR}
              stroke="#ffffff"
              strokeWidth={1.5}
              className="opacity-60 transition-opacity group-hover:opacity-100"
            />
          </g>
        ))}

        <text x={570} y={474} fontSize={11} fill={TICK_COLOR}>
          {t.sightings}
        </text>
        {legend.map(([count, r], i) => (
          <g key={count}>
            <circle
              cx={580 + i * 44}
              cy={492}
              r={r}
              fill={MARK_COLOR}
              fillOpacity={0.6}
              stroke="#ffffff"
              strokeWidth={1.5}
            />
            <text x={594 + i * 44} y={496} fontSize={11} fill={TICK_COLOR}>
              {count}
            </text>
          </g>
        ))}
      </svg>

      <Details summary={t.showNumbers}>
        <thead>
          <tr>
            <th className={HEAD_CELL}>{t.beach}</th>
            <th className={HEAD_CELL}>{t.town}</th>
            <th className={HEAD_CELL}>{t.sightings}</th>
          </tr>
        </thead>
        <tbody>
          {topBeachSightings.map((beach) => (
            <tr key={`${beach.name}-${beach.town}`}>
              <td className={CELL}>{beach.name}</td>
              <td className={CELL}>{beach.town}</td>
              <td className={CELL}>{beach.count}</td>
            </tr>
          ))}
        </tbody>
      </Details>
    </figure>
  );
}
