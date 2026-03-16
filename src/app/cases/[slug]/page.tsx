import type { Metadata } from 'next';

import CaseDetails from '@/components/CaseDetails/CaseDetails';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

import { WORK_CASES_CARDS } from '@/constants/work-cases.cards';

interface CasePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const currentCase = WORK_CASES_CARDS.find((card) => card.slug === slug);

  if (!currentCase) {
    return {
      title: 'Кейс не знайдено | DAROBOTS',
    };
  }

  const title = `${currentCase.name} - ${currentCase.description} | DAROBOTS`;
  const description = `${currentCase.description}. ${currentCase.results[0]}. Chatbot case study Ukraine - DAROBOTS.`;

  return {
    title,
    description,
    keywords: [
      currentCase.name,
      'chatbot case study',
      'Telegram bot Ukraine',
      'chatbot development',
      'DAROBOTS',
      ...currentCase.technologies,
      currentCase.platform,
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      images: [currentCase.imageSrc],
      siteName: 'DAROBOTS',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [currentCase.imageSrc],
    },
  };
}

export function generateStaticParams() {
  return WORK_CASES_CARDS.map((card) => ({
    slug: card.slug,
  }));
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const currentCase = WORK_CASES_CARDS.find((card) => card.slug === slug);

  const jsonLd = currentCase
    ? {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: `${currentCase.name} - ${currentCase.description}`,
        description: currentCase.fullDescription.split('\n\n')[0],
        author: {
          '@type': 'Organization',
          name: 'DAROBOTS',
          url: 'https://darobots.com',
        },
        about: {
          '@type': 'Thing',
          name: currentCase.platform,
        },
        keywords: currentCase.technologies.join(', '),
        image: currentCase.imageSrc,
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Header />
      <CaseDetails slug={slug} />
      <Footer />
    </>
  );
}
