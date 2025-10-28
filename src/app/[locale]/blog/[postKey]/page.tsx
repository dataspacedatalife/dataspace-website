import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { blogPosts } from '../posts';

interface BlogPostPageProps {
  params: { locale: 'en' | 'es'; postKey: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, postKey } = params;
  const posts = blogPosts[locale] || [];
  const post = posts.find((p) => p.key === postKey);

  if (!post) return notFound();

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <article className="max-w-3xl mx-auto mt-16 mb-24">
          <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-3 mb-6 text-gray-700 text-sm">
            <Image
              src={post.author_image}
              alt={post.author_name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span>{post.author_name}</span> ·{' '}
            <span>
              {new Intl.DateTimeFormat(locale === 'es' ? 'es-ES' : 'en-US', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              }).format(new Date(post.date))}
            </span>
          </div>

          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg mb-8"
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {post.description.map((item, idx) => {
              if (typeof item === 'string')
                return (
                  <p
                    key={idx}
                    className="text-gray-700 leading-relaxed text-base"
                  >
                    {item}
                  </p>
                );

              switch (item.type) {
                case 'h1':
                  return (
                    <h1 key={idx} className="text-4xl font-bold mt-8 mb-4">
                      {item.content}
                    </h1>
                  );
                case 'h2':
                  return (
                    <h2 key={idx} className="text-2xl font-semibold mt-6 mb-3">
                      {item.content}
                    </h2>
                  );
                case 'bold':
                  return (
                    <p
                      key={idx}
                      className="text-gray-700 leading-relaxed text-base font-bold"
                    >
                      {item.content}
                    </p>
                  );
                case 'underline':
                  return (
                    <p
                      key={idx}
                      className="text-gray-700 leading-relaxed text-base underline"
                    >
                      {item.content}
                    </p>
                  );
                default:
                  return (
                    <p
                      key={idx}
                      className="text-gray-700 leading-relaxed text-base"
                    >
                      {item.content}
                    </p>
                  );
              }
            })}
          </div>
        </article>
      </Container>
      <Footer />
    </main>
  );
}
