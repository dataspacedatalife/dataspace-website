import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/* ---------------- LOCK SIMPLE EN MEMORIA ---------------- */
const locks = new Map<string, Promise<void>>();

function withLock<T>(key: string, fn: () => Promise<T> | T): Promise<T> {
  const prev = locks.get(key) || Promise.resolve();

  let release!: () => void;

  const current = new Promise<void>(res => {
    release = res;
  });

  locks.set(key, prev.then(() => current));

  return prev
    .then(fn)
    .finally(() => {
      release();
      if (locks.get(key) === current) {
        locks.delete(key);
      }
    });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    /* ---------------- VALIDACIÓN MANUAL SEGURA ---------------- */
    const required = [
      'perfil',
      'objetivos',
      'contenidos',
      'necesidades',
      'dominio',
      'claridad',
      'dudas',
      'organizacion',
      'valoracionGlobal',
      'modalidad',
    ];

    for (const field of required) {
      const value = body?.[field];

      if (value === undefined || value === null || String(value).trim() === '') {
        return NextResponse.json(
          { error: `Missing field: ${field}` },
          { status: 400 }
        );
      }
    }

    /* ---------------- CAPTCHA ---------------- */
    const a = Number(body?.captcha?.a ?? 0);
    const b = Number(body?.captcha?.b ?? 0);
    const answer = Number(body?.captcha?.answer ?? -1);

    if (answer !== a + b) {
      return NextResponse.json(
        { error: 'Captcha incorrecto' },
        { status: 400 }
      );
    }

    /* ---------------- NORMALIZACIÓN ---------------- */
    const safeData = {
      perfil: String(body.perfil || ''),
      objetivos: String(body.objetivos || ''),
      contenidos: String(body.contenidos || ''),
      necesidades: String(body.necesidades || ''),
      dominio: String(body.dominio || ''),
      claridad: String(body.claridad || ''),
      dudas: String(body.dudas || ''),
      organizacion: String(body.organizacion || ''),
      valoracionGlobal: String(body.valoracionGlobal || ''),
      recomendaria: String(body.recomendaria || ''),
      futurasFormaciones: Array.isArray(body.futurasFormaciones)
        ? body.futurasFormaciones
        : [],
      propuestaCurso: String(body.propuestaCurso || ''),
      modalidad: String(body.modalidad || ''),
      survey: String(body.survey || 'default'),
    };

    const dir = path.join(process.cwd(), 'data', safeData.survey);

    return await withLock(safeData.survey, async () => {
      /* ---------------- CREAR CARPETA ---------------- */
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      const files = fs.readdirSync(dir).filter(f => f.endsWith('.csv'));

      /* ---------------- LÍMITE ---------------- */
      if (files.length >= 5) {
        return NextResponse.json(
          { error: 'Límite de respuestas para la encuesta' },
          { status: 403 }
        );
      }

      /* ---------------- NOMBRE SEGURO (SIN COLISIÓN) ---------------- */
      const filePath = path.join(
        dir,
        `answer-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.csv`
      );

      /* ---------------- SANITIZE ---------------- */
      const clean = (t: any) =>
        String(t ?? '')
          .replace(/[<>]/g, '')
          .replace(/,/g, ' ')
          .replace(/\n/g, ' ')
          .replace(/\r/g, ' ');

      const csv = `
perfil,${clean(safeData.perfil)}
objetivos,${clean(safeData.objetivos)}
contenidos,${clean(safeData.contenidos)}
necesidades,${clean(safeData.necesidades)}
dominio,${clean(safeData.dominio)}
claridad,${clean(safeData.claridad)}
dudas,${clean(safeData.dudas)}
organizacion,${clean(safeData.organizacion)}
recomendaria,${clean(safeData.recomendaria)}
valoracionGlobal,${clean(safeData.valoracionGlobal)}
futurasFormaciones,${clean(safeData.futurasFormaciones.join(' | '))}
propuestaCurso,${clean(safeData.propuestaCurso)}
modalidad,${clean(safeData.modalidad)}
`;

      fs.writeFileSync(filePath, csv);

      return NextResponse.json({ success: true });
    });

  } catch (e) {
    console.error('SERVER ERROR:', e);

    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}