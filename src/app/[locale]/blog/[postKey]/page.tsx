import Image from 'next/image';
import { notFound } from 'next/navigation';
import { type Locale } from 'next-intl';
import React from 'react';
import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { GradientBackground } from '@/components/gradient';
import { Navbar } from '@/components/navbar';
import { useDateFormatter } from '@/hooks/formatters';
import { blogPosts } from '../posts';

interface BlogPostPageProps {
  params: Promise<{ locale: Locale; postKey: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, postKey } = React.use(params);
  const post = blogPosts[locale].find((p) => p.key === postKey);

  const formatDate = useDateFormatter();

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
            <span>{formatDate(post.date)}</span>
          </div>

          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="rounded-lg mb-8"
            />
          )}

          <div className="max-w-3xl mx-auto mt-10 space-y-6">
            {post.description.map((item, idx) => {
              if (React.isValidElement(item)) {
                return item;
              }
              if (typeof item === 'string') {
                const isBullet = item.trim().startsWith('•');

                return (
                  <p
                    key={idx}
                    className={[
                      'text-gray-700 text-base',
                      isBullet ? 'leading-normal mb-1!' : 'leading-relaxed',
                    ].join(' ')}
                  >
                    {item}
                  </p>
                );
              }

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
                case 'h3':
                  return (
                    <h3 key={idx} className="text-xl font-semibold mt-5 mb-2">
                      {item.content}
                    </h3>
                  );
                case 'h4':
                  return (
                    <h4 key={idx} className="text-lg font-semibold mt-4 mb-2">
                      {item.content}
                    </h4>
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
                case 'link':
                  return (
                    <p
                      key={idx}
                      className="text-gray-700 leading-relaxed text-base"
                    >
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        {item.content}
                      </a>
                    </p>
                  );
                case 'image':
                  return (
                    <figure key={idx} className="my-6">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={800}
                        height={400}
                        className="rounded-lg mx-auto"
                      />
                      {item.caption && (
                        <figcaption className="text-sm text-gray-500 mt-2 text-center">
                          {item.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                case 'quote':
                  return (
                    <blockquote
                      key={idx}
                      className="border-l-4 pl-4 italic text-gray-700 my-8"
                    >
                      {item.content}
                    </blockquote>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </article>
      </Container>
      <Footer />
    </main>
  );
}
