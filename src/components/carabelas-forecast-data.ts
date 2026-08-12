// Datos de una ejecución diaria del sistema de predicción de deriva de
// carabela portuguesa (12 ago 2026), tal como los devuelve la API del visor
// https://carabelas.dataspace.cesga.es
// Fuente: IEO-CSIC / CESGA — OneHealth DataSpace.

/** Playa a la que corresponde la serie horaria de riesgo. */
export const hourlyRiskBeach = 'Maior o de Malpica';

/** Instante (UTC) de la primera hora de la serie. */
export const hourlyRiskStart = '2026-08-12T03:00:00Z';

/** Umbral (en % de partículas) a partir del cual el aviso pasa a moderado. */
export const moderateThreshold = 5;

/**
 * Riesgo titular horario (risk_percent) para las 96 horas del horizonte de
 * predicción, empezando en `hourlyRiskStart`.
 */
export const hourlyRisk: number[] = [
  1.11, 1.11, 1.23, 1.11, 1.11, 1.11, 1.23, 1.23, 1.11, 1.23, 1.45, 1.56, 1.67,
  1.56, 1.56, 1.56, 1.56, 1.56, 1.56, 2.12, 2.23, 2.12, 2.23, 2.23, 2.34, 2.45,
  2.68, 2.79, 2.9, 2.9, 2.79, 2.79, 3.01, 3.12, 3.12, 3.12, 3.12, 3.12, 3.12,
  3.12, 3.01, 3.18, 3.53, 3.65, 4.0, 3.89, 3.77, 4.0, 4.24, 4.71, 4.83, 4.71,
  5.06, 5.06, 5.06, 5.77, 6.01, 5.89, 6.12, 6.48, 6.6, 6.95, 7.18, 7.77, 8.01,
  8.13, 8.24, 8.24, 8.01, 8.01, 8.13, 8.24, 8.36, 8.6, 8.83, 9.07, 9.42, 9.19,
  9.66, 9.78, 9.66, 9.78, 9.66, 9.54, 9.78, 10.37, 10.48, 10.6, 10.84, 11.07,
  11.19, 11.19, 11.19, 11.07, 10.95, 10.95,
];

export interface ModelRisk {
  model: 'Leeway' | 'OceanDrift';
  /** risk_percent máximo en el horizonte, por isóbata de siembra (metros). */
  byIsobath: { depth: 50 | 100 | 150; value: number }[];
}

/** Máximo del horizonte para la misma playa, por modelo y profundidad. */
export const riskByModel: ModelRisk[] = [
  {
    model: 'Leeway',
    byIsobath: [
      { depth: 50, value: 6.8 },
      { depth: 100, value: 11.19 },
      { depth: 150, value: 2.83 },
    ],
  },
  {
    model: 'OceanDrift',
    byIsobath: [
      { depth: 50, value: 6.91 },
      { depth: 100, value: 8.36 },
      { depth: 150, value: 0.28 },
    ],
  },
];

/** Nivel de aviso titular (peor caso a 4 días) de las 574 playas del visor. */
export const warningLevelDistribution: {
  level: 0 | 1 | 2 | 3 | 4;
  count: number;
}[] = [
  { level: 0, count: 109 },
  { level: 1, count: 430 },
  { level: 2, count: 35 },
  { level: 3, count: 0 },
  { level: 4, count: 0 },
];

export const totalBeaches = 574;
