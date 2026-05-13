'use client';

import { useState, useEffect, useRef } from 'react';

export default function SurveyForm() {
  const [form, setForm] = useState({
    perfil: '',
    contenidos: '',
    necesidades: '',
    claridad: '',
    dudas: '',
    recomendaria: false,
    valoracionGlobal: '',
    futurasFormaciones: [] as string[],
    propuestaCurso: '',
  });

  /* ---------------- CAPTCHA ---------------- */
  const [captcha, setCaptcha] = useState({
    a: 0,
    b: 0,
    answer: '',
  });

  const captchaResult = useRef(0);

  const [message, setMessage] = useState('');

  const ratings = ['1', '2', '3', '4', '5'];

  useEffect(() => {
    resetCaptcha();
  }, []);

  const resetCaptcha = () => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);

    captchaResult.current = a + b;

    setCaptcha({
      a,
      b,
      answer: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;

    const { name, value, type, checked } = target;

    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setForm(prev => ({
      ...prev,
      futurasFormaciones: checked
        ? [...prev.futurasFormaciones, value]
        : prev.futurasFormaciones.filter(v => v !== value),
    }));
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaptcha(prev => ({
      ...prev,
      answer: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Number(captcha.answer) !== captchaResult.current) {
      setMessage('Captcha incorrecto');
      resetCaptcha();
      return;
    }

    try {
      const res = await fetch('/api/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          survey: 'survey15mayo',
          captcha: {
            a: captcha.a,
            b: captcha.b,
            answer: Number(captcha.answer),
          },
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setMessage('Encuesta enviada correctamente');

        setForm({
          perfil: '',
          contenidos: '',
          necesidades: '',
          claridad: '',
          dudas: '',
          recomendaria: false,
          valoracionGlobal: '',
          futurasFormaciones: [],
          propuestaCurso: '',
        });

        resetCaptcha();
      } else {
        setMessage(data.error || 'Error al enviar');
        console.log('ERROR BACKEND:', data);
      }
    } catch (err) {
      setMessage('Servidor no disponible');
      console.log('FETCH ERROR:', err);
    }
  };

  return (
    <form className="survey-form" onSubmit={handleSubmit}>
      <h1>Encuesta de Satisfacción - OneHealth DataSpace (CESGA)</h1>
      <h2>Curso 15 de mayo</h2>

      <label>Perfil del participante</label>

      <select
        name="perfil"
        value={form.perfil}
        onChange={handleChange}
        required
      >
        <option value="">Seleccione</option>
        <option>Investigador/a</option>
        <option>Técnico/a</option>
        <option>Estudiante</option>
        <option>Empresa</option>
        <option>Administración Pública</option>
        <option>Otro/a</option>
      </select>

      {[
        ['contenidos', 'Calidad y relevancia de los contenidos'],
        ['necesidades', 'Adecuación a necesidades profesionales'],
        ['claridad', 'Claridad en la explicación'],
        ['dudas', 'Resolución de dudas'],
        ['valoracionGlobal', 'Valoración global del curso'],
      ].map(([name, label]) => (
        <div key={name} className="field">
          <label>{label}</label>

          <div className="radio-group">
            {ratings.map(r => (
              <label key={r} className="radio-option">
                <input
                  type="radio"
                  name={name}
                  value={r}
                  checked={(form as any)[name] === r}
                  onChange={handleChange}
                  required
                />
                {r}
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="recommend-box">
        <label htmlFor="recomendaria">¿Recomendaría este curso?</label>

        <input
          id="recomendaria"
          type="checkbox"
          name="recomendaria"
          checked={form.recomendaria}
          onChange={handleChange}
        />
      </div>

      <label>Formación futura</label>

      <div className="checkbox-group">
        {[
          'IA / Machine Learning',
          'HPC',
          'Big Data',
          'Ciberseguridad',
          'Cloud',
          'Espacios de datos',
          'Programación',
          'Visualización de datos',
          'Otro',
        ].map(item => (
          <label key={item}>
            <input
              type="checkbox"
              value={item}
              checked={form.futurasFormaciones.includes(item)}
              onChange={handleCheckbox}
            />
            {item}
          </label>
        ))}
      </div>

      <label>Propuesta de curso</label>

      <textarea
        name="propuestaCurso"
        value={form.propuestaCurso}
        onChange={handleChange}
      />

      {/* CAPTCHA */}
      <label>Verificación anti-bots</label>

      <div className="captcha-box">
        <span>
          ¿Cuánto es {captcha.a} + {captcha.b}?
        </span>

        <input
          type="number"
          value={captcha.answer}
          onChange={handleCaptchaChange}
          required
        />
      </div>

      <button type="submit">Enviar encuesta</button>

      {message && (
        <p className={`message ${message.includes('correctamente') ? 'success' : ''}`}>
          {message}
        </p>
      )}
    </form>
  );
}