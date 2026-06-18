'use client';

import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Button } from '@/components/button';

const FIRST_REVIEW_DATE = new Date(2025, 10, 21);

// Skip specific review days (use YYYY-MM-DD strings to avoid timezone surprises)
const SKIP_REVIEW_DAYS = new Set([
  '2026-01-02', // Friday 2 January 2026
]);

export function ReviewCalendar() {
  const t = useTranslations('how.reviewCycle');

  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );

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

  const toYMD = (d: Date) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };

  const isReviewDay = (day: number) => {
    const date = new Date(year, monthIndex, day);

    if (SKIP_REVIEW_DAYS.has(toYMD(date))) return false;

    const diff = date.getTime() - FIRST_REVIEW_DATE.getTime();
    const weeks = diff / (1000 * 60 * 60 * 24 * 7);

    return date.getDay() === 5 && weeks >= 0 && Math.round(weeks) % 2 === 0;
  };

  return (
    <div className="mx-auto max-w-md text-center">
      <div className="flex items-center justify-between mb-4">
        <Button
          onClick={() => setCurrentMonth(new Date(year, monthIndex - 1, 1))}
          className="p-2 rounded-xl border border-gray-200 text-gray-700 transition-all duration-200 hover:bg-gray-600 hover:text-white hover:scale-110 hover:shadow-md"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <h4 className="text-xl font-semibold capitalize">
          {monthName} {year}
        </h4>

        <Button
          onClick={() => setCurrentMonth(new Date(year, monthIndex + 1, 1))}
          className="p-2 rounded-xl border border-gray-200 text-gray-700 transition-all duration-200 hover:bg-gray-600 hover:text-white hover:scale-110 hover:shadow-md"
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
                  ? 'bg-[#009AB8] text-white font-semibold border-[#007F99] shadow'
                  : 'border-gray-200',
                isToday && 'ring-2 ring-[#009AB8]',
              )}
            >
              {day}
            </div>
          );
        })}
      </div>

      <p className="mt-3 text-sm text-gray-500 italic">
        {t('footer')}
      </p>
    </div>
  );
}