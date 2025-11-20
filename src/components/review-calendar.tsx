'use client';

import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Button } from '@/components/button';

const FIRST_REVIEW_DATE = new Date(2025, 10, 21); // 21 Nov 2025

export function ReviewCalendar() {
  const t = useTranslations('how.reviewCycle');

  const [currentMonth, setCurrentMonth] = useState(
    new Date(FIRST_REVIEW_DATE.getFullYear(), FIRST_REVIEW_DATE.getMonth(), 1),
  );

  const today = new Date(); // Fecha actual
  const currentDay = today.getDate();
  const currentMonthIndex = today.getMonth();
  const currentYear = today.getFullYear();

  const monthIndex = currentMonth.getMonth();
  const year = currentMonth.getFullYear();

  const monthName = t.raw('months')[monthIndex];
  const weekdays = t.raw('weekdays');

  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const startDay = new Date(year, monthIndex, 1).getDay();
  const offsetStart = startDay === 0 ? 6 : startDay - 1;

  const isReviewDay = (day: number) => {
    const date = new Date(year, monthIndex, day);
    const diff = date.getTime() - FIRST_REVIEW_DATE.getTime();
    const weeks = diff / (1000 * 60 * 60 * 24 * 7);

    return date.getDay() === 5 && weeks >= 0 && Math.round(weeks) % 2 === 0;
  };

  return (
    <div className="mx-auto max-w-md text-center">
      <div className="flex items-center justify-between mb-4">
        <Button
          onClick={() => setCurrentMonth(new Date(year, monthIndex - 1, 1))}
          className="p-2 rounded-xl border hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <h4 className="text-xl font-semibold capitalize">
          {monthName} {year}
        </h4>

        <Button
          onClick={() => setCurrentMonth(new Date(year, monthIndex + 1, 1))}
          className="p-2 rounded-xl border hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      <div className="grid grid-cols-7 text-sm font-semibold text-gray-800 mb-2">
        {weekdays.map((d: string) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: offsetStart }).map((_, i) => (
          <div key={`e-${i}`} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const review = isReviewDay(day);
          const isToday =
            day === currentDay &&
            monthIndex === currentMonthIndex &&
            year === currentYear;

          return (
            <div
              key={day}
              className={clsx(
                'h-10 flex items-center justify-center rounded-xl border text-gray-700',
                review
                  ? 'bg-emerald-600 text-white font-semibold border-emerald-700 shadow'
                  : 'border-gray-200',
                isToday && 'ring-2 ring-emerald-500', // Resalta hoy
              )}
            >
              {day}
            </div>
          );
        })}
      </div>

      <p className="mt-3 text-sm text-gray-500 italic">{t('footer')}</p>
    </div>
  );
}
