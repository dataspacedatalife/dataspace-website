import type { Locale } from 'next-intl';
import {
  hourlyRisk,
  hourlyRiskBeach,
  hourlyRiskStart,
  moderateThreshold,
  riskByModel,
  totalBeaches,
  warningLevelDistribution,
} from './carabelas-forecast-data';

/** Colores de los cinco niveles de aviso, los mismos que usa el visor. */
const LEVEL_COLORS = ['#5b8fc7', '#12813a', '#d99e00', '#d94f10', '#9e1b2c'];
const PARTICLE_COLOR = '#7a6fe3';
const INK = '#0b0b0b';
const INK_2 = '#52514e';
const INK_3 = '#898781';
const RULE = '#e1e0d9';
const RULE_2 = '#c3c2b7';

interface ForecastLabels {
  /** Nombres de los cinco niveles de aviso, de «sin riesgo» a «muy alto». */
  levels: [string, string, string, string, string];
  /** Abreviaturas de los días de la semana, empezando en domingo. */
  weekdays: [string, string, string, string, string, string, string];
  decimalSeparator: ',' | '.';
  /** Separador entre el número y el símbolo de porcentaje. */
  percentSpace: string;
  hourlyTitle: string;
  hourlyDescription: string;
  moderateThresholdLabel: string;
  dailyMaxima: string;
  modelTitle: string;
  modelDescription: string;
  modelSubtitles: Record<'Leeway' | 'OceanDrift', string>;
  modelFootnote: string;
  distributionTitle: string;
  distributionDescription: string;
  distributionFootnote: string;
}

const LABELS: Record<Locale, ForecastLabels> = {
  es: {
    levels: ['Sin riesgo', 'Bajo', 'Moderado', 'Alto', 'Muy alto'],
    weekdays: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    decimalSeparator: ',',
    percentSpace: ' ',
    hourlyTitle: 'La previsión hora a hora de una playa',
    hourlyDescription: `Riesgo horario de ${hourlyRiskBeach} en la previsión del 12 de agosto de 2026. Lo importante es la tendencia: el índice sube del 1,1 % del miércoles al 11,2 % del sábado por la tarde y cruza el umbral de moderado el viernes a última hora.`,
    moderateThresholdLabel: 'umbral de moderado',
    dailyMaxima: 'Máximos diarios',
    modelTitle: 'De dónde sale el aviso',
    modelDescription:
      'La misma playa desglosada por modelo y profundidad de siembra de partículas. Se puede ver que el aviso lo genera el modelo con viento en la isóbata de 100 m; la deriva puramente oceánica desde la isóbata de 150 m no produce casi nada. El nivel de riesgo es el máximo de los seis valores.',
    modelSubtitles: {
      Leeway: 'corrientes + viento',
      OceanDrift: 'solo corrientes',
    },
    modelFootnote:
      'nivel de riesgo en los próximos 4 días · misma escala, 0–12 %',
    distributionTitle: 'Un día de agosto en las 574 playas',
    distributionDescription:
      'Reparto de las playas por nivel de aviso. En un día típico de agosto en que está casi todo verde con una zona de riesgo moderado en el noroeste.',
    distributionFootnote: `${totalBeaches} playas · nivel titular = peor caso en 4 días`,
  },
  en: {
    levels: ['No risk', 'Low', 'Moderate', 'High', 'Very high'],
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    decimalSeparator: '.',
    percentSpace: '',
    hourlyTitle: 'The hour-by-hour forecast for one beach',
    hourlyDescription: `Hourly risk for ${hourlyRiskBeach} in the forecast of 12 August 2026. What matters is the trend: the index climbs from 1.1% on Wednesday to 11.2% on Saturday afternoon and crosses the moderate threshold late on Friday.`,
    moderateThresholdLabel: 'moderate threshold',
    dailyMaxima: 'Daily maxima',
    modelTitle: 'Where the warning comes from: model and isobath',
    modelDescription:
      'The same beach broken down by model and seeding depth. The warning is driven by the model with wind on the 100 m isobath; purely oceanic drift from the 150 m one produces almost nothing. The risk level is the maximum of the six values.',
    modelSubtitles: {
      Leeway: 'currents + wind',
      OceanDrift: 'currents only',
    },
    modelFootnote:
      'maximum risk_percent over the next 4 days · same scale, 0–12%',
    distributionTitle: 'One August day across the 574 beaches',
    distributionDescription:
      'Breakdown of beaches by warning level. A typical August day is almost all green with a moderated risk region in the Northwest.',
    distributionFootnote: `${totalBeaches} beaches · headline level = worst case over 4 days`,
  },
  gl: {
    levels: ['Sen risco', 'Baixo', 'Moderado', 'Alto', 'Moi alto'],
    weekdays: ['dom', 'lun', 'mar', 'mér', 'xov', 'ven', 'sáb'],
    decimalSeparator: ',',
    percentSpace: ' ',
    hourlyTitle: 'A previsión hora a hora dunha praia',
    hourlyDescription: `Risco horario de ${hourlyRiskBeach} na previsión do 12 de agosto de 2026. O importante é a tendencia: o índice sobe do 1,1 % do mércores ao 11,2 % do sábado pola tarde e cruza o limiar de moderado o venres a última hora.`,
    moderateThresholdLabel: 'limiar de moderado',
    dailyMaxima: 'Máximos diarios',
    modelTitle: 'De onde sae o aviso: modelo e isóbata',
    modelDescription:
      'A mesma praia, no pico do horizonte, desagregada por modelo e profundidade de sementeira. O aviso xérao o modelo con vento na isóbata de 100 m. O nivel de risco é o máximo dos seis valores.',
    modelSubtitles: {
      Leeway: 'correntes + vento',
      OceanDrift: 'só correntes',
    },
    modelFootnote:
      'nivel de risco nos seguintes 4 días · mesma escala, 0–12 %',
    distributionTitle: 'Un día de agosto nas 574 praias',
    distributionDescription:
      'Reparto das praias por nivel de aviso. Un día típico de agosto é case todo verde cunha bolsa de moderado no noroeste; os dous niveis superiores están baleiros. Distribucións coma esta son a razón de que os limiares sigan etiquetados como provisionais.',
    distributionFootnote: `${totalBeaches} praias · nivel titular = peor caso en 4 días`,
  },
};

function formatNumber(value: number, digits: number, t: ForecastLabels) {
  return value.toFixed(digits).replace('.', t.decimalSeparator);
}

function formatPercent(value: number, digits: number, t: ForecastLabels) {
  return `${formatNumber(value, digits, t)}${t.percentSpace}%`;
}

const MONO = 'ui-monospace, monospace';

function FigureCaption({ title, text }: { title: string; text: string }) {
  return (
    <>
      <h3 className="text-xl font-semibold mt-5 mb-2">{title}</h3>
      <p className="text-gray-700 text-base leading-relaxed">{text}</p>
    </>
  );
}

/**
 * Serie horaria del índice de riesgo de una playa a lo largo de las 96 horas
 * del horizonte de predicción, coloreada por nivel de aviso.
 */
export function HourlyRiskChart({ locale }: { locale: Locale }) {
  const t = LABELS[locale];

  const left = 36;
  const right = 710;
  const baseline = 162;
  const topLimit = 14;
  const yMax = 12;
  const scale = (baseline - topLimit) / yMax;
  const step = (right - left) / hourlyRisk.length;
  const barWidth = step * 0.715;

  const start = new Date(hourlyRiskStart);
  const hours = hourlyRisk.map((value, index) => {
    const at = new Date(start.getTime() + index * 3600_000);
    return {
      value,
      x: left + index * step,
      day: `${t.weekdays[at.getUTCDay()]} ${at.getUTCDate()}`,
      hour: `${String(at.getUTCHours()).padStart(2, '0')}:00`,
      level: value >= moderateThreshold ? 2 : 1,
      isDayStart: at.getUTCHours() === 0,
    };
  });

  // Un máximo por día natural, en el orden en que aparecen.
  const dailyMax: { day: string; value: number }[] = [];
  for (const hour of hours) {
    const current = dailyMax.at(-1);
    if (current?.day === hour.day) {
      current.value = Math.max(current.value, hour.value);
    } else {
      dailyMax.push({ day: hour.day, value: hour.value });
    }
  }

  return (
    <figure className="my-10">
      <FigureCaption title={t.hourlyTitle} text={t.hourlyDescription} />

      <svg
        viewBox="0 0 720 196"
        role="img"
        aria-label={t.hourlyTitle}
        className="mt-4 block h-auto w-full overflow-visible"
      >
        {[5, 10].map((value) => {
          const y = baseline - value * scale;
          return (
            <g key={value}>
              <line
                x1={left}
                y1={y}
                x2={right}
                y2={y}
                stroke={RULE}
                strokeWidth={1}
                strokeDasharray="3 3"
              />
              <text
                x={left - 6}
                y={y + 3.5}
                textAnchor="end"
                fontSize={9}
                fontFamily={MONO}
                fill={INK_3}
              >
                {`${value}%`}
              </text>
            </g>
          );
        })}
        <text
          x={left + 3}
          y={baseline - moderateThreshold * scale - 6}
          fontSize={9}
          fontFamily={MONO}
          fill={INK_3}
        >
          {t.moderateThresholdLabel}
        </text>

        <line
          x1={left}
          y1={baseline}
          x2={right}
          y2={baseline}
          stroke={RULE_2}
          strokeWidth={1}
        />

        {hours.map((hour, index) => (
          <g key={`${hour.day}-${hour.hour}`}>
            {hour.isDayStart && (
              <line
                x1={hour.x}
                y1={topLimit}
                x2={hour.x}
                y2={baseline}
                stroke={RULE}
                strokeWidth={1}
              />
            )}
            {(index === 0 || hour.isDayStart) && (
              <text
                x={hour.x + (index === 0 ? 3 : 4)}
                y={184}
                fontSize={10}
                fontFamily={MONO}
                fill={INK_2}
              >
                {hour.day}
              </text>
            )}
            <rect
              x={hour.x}
              y={baseline - Math.max(hour.value * scale, 1)}
              width={barWidth}
              height={Math.max(hour.value * scale, 1)}
              rx={2}
              fill={LEVEL_COLORS[hour.level]}
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              <title>{`${hour.day} · ${hour.hour} · ${formatPercent(hour.value, 2, t)} · ${t.levels[hour.level]}`}</title>
            </rect>
          </g>
        ))}
      </svg>

      <p className="mt-2 text-sm text-gray-500">
        {t.dailyMaxima} —{' '}
        {dailyMax
          .map((d) => `${d.day} ${formatPercent(d.value, 1, t)}`)
          .join(' · ')}
      </p>
    </figure>
  );
}

/**
 * Máximo del horizonte de una playa desglosado por los dos modelos de deriva
 * y las tres isóbatas de siembra.
 */
export function RiskByModelChart({ locale }: { locale: Locale }) {
  const t = LABELS[locale];
  const yMax = 12;
  const barScale = 240 / yMax;
  const rowY = [56, 94, 132];

  return (
    <figure className="my-10">
      <FigureCaption title={t.modelTitle} text={t.modelDescription} />

      <svg
        viewBox="0 0 720 188"
        role="img"
        aria-label={t.modelTitle}
        className="mt-4 block h-auto w-full overflow-visible"
      >
        {riskByModel.map((model, panel) => {
          const originX = panel === 0 ? 64 : 434;
          const titleX = panel === 0 ? 10 : 380;

          return (
            <g key={model.model}>
              <text
                x={titleX}
                y={18}
                fontSize={12}
                fontFamily={MONO}
                fill={INK}
              >
                {model.model}
              </text>
              <text
                x={titleX}
                y={34}
                fontSize={10}
                fontFamily={MONO}
                fill={INK_3}
              >
                {t.modelSubtitles[model.model]}
              </text>
              <line
                x1={originX}
                y1={50}
                x2={originX}
                y2={156}
                stroke={RULE_2}
                strokeWidth={1}
              />

              {model.byIsobath.map((isobath, row) => (
                <g key={isobath.depth}>
                  <text
                    x={originX - 8}
                    y={rowY[row] + 13}
                    textAnchor="end"
                    fontSize={10}
                    fontFamily={MONO}
                    fill={INK_2}
                  >
                    {`−${isobath.depth} m`}
                  </text>
                  <rect
                    x={originX}
                    y={rowY[row]}
                    width={isobath.value * barScale}
                    height={18}
                    rx={2}
                    fill={PARTICLE_COLOR}
                  >
                    <title>{`${model.model} · −${isobath.depth} m · ${formatPercent(isobath.value, 2, t)}`}</title>
                  </rect>
                  <text
                    x={originX + isobath.value * barScale + 8}
                    y={rowY[row] + 13}
                    fontSize={11}
                    fontFamily={MONO}
                    fill={INK}
                  >
                    {formatPercent(isobath.value, 2, t)}
                  </text>
                </g>
              ))}
            </g>
          );
        })}

        <text x={10} y={182} fontSize={10} fontFamily={MONO} fill={INK_3}>
          {t.modelFootnote}
        </text>
      </svg>
    </figure>
  );
}

/** Reparto de las playas del visor por nivel de aviso en una ejecución. */
export function WarningLevelDistributionChart({ locale }: { locale: Locale }) {
  const t = LABELS[locale];
  const originX = 96;
  const maxCount = Math.max(...warningLevelDistribution.map((l) => l.count));
  const barScale = 534 / maxCount;

  return (
    <figure className="my-10">
      <FigureCaption
        title={t.distributionTitle}
        text={t.distributionDescription}
      />

      <svg
        viewBox="0 0 720 200"
        role="img"
        aria-label={t.distributionTitle}
        className="mt-4 block h-auto w-full overflow-visible"
      >
        {warningLevelDistribution.map(({ level, count }) => {
          const y = 26 + level * 32;
          const share = Math.round((count / totalBeaches) * 100);

          return (
            <g key={level}>
              <text
                x={originX - 12}
                y={y + 14}
                textAnchor="end"
                fontSize={11}
                fontFamily={MONO}
                fill={INK_2}
              >
                {t.levels[level]}
              </text>
              {count > 0 ? (
                <>
                  <rect
                    x={originX}
                    y={y}
                    width={count * barScale}
                    height={19}
                    rx={2}
                    fill={LEVEL_COLORS[level]}
                  >
                    <title>{`${t.levels[level]} · ${count} · ${share}${t.percentSpace}%`}</title>
                  </rect>
                  <text
                    x={originX + count * barScale + 9}
                    y={y + 14}
                    fontSize={11}
                    fontFamily={MONO}
                    fill={INK}
                  >
                    {count}
                    <tspan fill={INK_3}>
                      {` · ${share}${t.percentSpace}%`}
                    </tspan>
                  </text>
                </>
              ) : (
                <>
                  <rect
                    x={originX}
                    y={y + 7}
                    width={6}
                    height={5}
                    rx={1}
                    fill={RULE_2}
                  />
                  <text
                    x={originX + 15}
                    y={y + 14}
                    fontSize={11}
                    fontFamily={MONO}
                    fill={INK_3}
                  >
                    0
                  </text>
                </>
              )}
            </g>
          );
        })}

        <line
          x1={originX}
          y1={20}
          x2={originX}
          y2={178}
          stroke={RULE_2}
          strokeWidth={1}
        />
        <text x={originX} y={192} fontSize={10} fontFamily={MONO} fill={INK_3}>
          {t.distributionFootnote}
        </text>
      </svg>
    </figure>
  );
}
