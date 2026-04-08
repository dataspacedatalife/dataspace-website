import EventsClient from './EventsClient';

export async function generateMetadata() {
  const { getTranslations } = await import('next-intl/server');
  const t = await getTranslations('events.metadata');
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function EventsPage() {
  return <EventsClient />;
}