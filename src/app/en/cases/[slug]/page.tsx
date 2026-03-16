import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

import { WORK_CASES_CARDS_EN } from '@/constants/work-cases-en.cards';

import styles from './EnCasePage.module.scss';

interface CasePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const currentCase = WORK_CASES_CARDS_EN.find((card) => card.slug === slug);

  if (!currentCase) {
    return {
      title: 'Case not found | DAROBOTS',
    };
  }

  const title = `${currentCase.name} — ${currentCase.description} | DAROBOTS Ukraine`;
  const description = `${currentCase.description}. ${currentCase.results[0]}. Chatbot case study by DAROBOTS, Ukraine.`;

  return {
    title,
    description,
    keywords: [
      currentCase.name,
      'chatbot case study Ukraine',
      'Telegram bot development Ukraine',
      'chatbot development company',
      'DAROBOTS',
      ...currentCase.technologies,
      currentCase.platform,
    ],
    alternates: {
      canonical: `/en/cases/${slug}`,
      languages: {
        uk: `/cases/${slug}`,
        en: `/en/cases/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: 'article',
      images: [currentCase.imageSrc],
      siteName: 'DAROBOTS',
      locale: 'en_US',
    },
  };
}

export function generateStaticParams() {
  return WORK_CASES_CARDS_EN.map((card) => ({
    slug: card.slug,
  }));
}

export default async function EnCasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const currentCase = WORK_CASES_CARDS_EN.find((card) => card.slug === slug);

  if (!currentCase) {
    return (
      <>
        <Header />
        <main className={styles.root}>
          <div className={styles.not_found}>
            <h1>Case study not found</h1>
            <Link href="/en">Back to homepage</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${currentCase.name} — ${currentCase.description}`,
    description: currentCase.fullDescription.split('\n\n')[0],
    author: {
      '@type': 'Organization',
      name: 'DAROBOTS',
      url: 'https://darobots.com.ua',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vinnytsia',
        addressCountry: 'Ukraine',
      },
    },
    about: {
      '@type': 'Thing',
      name: currentCase.platform,
    },
    keywords: currentCase.technologies.join(', '),
    image: currentCase.imageSrc,
    inLanguage: 'en',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className={styles.root}>
        <div className={styles.breadcrumbs}>
          <Link href="/en">Home</Link>
          <span>/</span>
          <Link href="/en#cases">Case Studies</Link>
          <span>/</span>
          <span className={styles.current}>{currentCase.name}</span>
        </div>

        <div className={styles.content}>
          <div className={styles.image_block}>
            <Image
              alt={`${currentCase.name} — chatbot case study by DAROBOTS Ukraine`}
              src={currentCase.imageSrc}
              width={1200}
              height={680}
              priority
            />
            <span className={styles.platform_badge}>{currentCase.platform}</span>
          </div>

          <h1>{currentCase.name}</h1>
          <p className={styles.description}>{currentCase.description}</p>

          <div className={styles.metrics_block}>
            {currentCase.points.map((point) => (
              <div key={point.label} className={styles.metric_card}>
                <span>{point.number}</span>
                <p>{point.label}</p>
              </div>
            ))}
          </div>

          <h2>About the Project</h2>
          {currentCase.fullDescription.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <h2>Challenge</h2>
          <p>{currentCase.challenge}</p>

          <h2>Solution</h2>
          <p>{currentCase.solution}</p>

          <h2>Results</h2>
          <ul>
            {currentCase.results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>

          <h2>Technologies</h2>
          <div className={styles.technologies_block}>
            {currentCase.technologies.map((tech) => (
              <span key={tech} className={styles.tech_tag}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.cta_block}>
            <h3>Want a similar solution for your business?</h3>
            <p>Contact Darobots to discuss your project and find the optimal chatbot solution.</p>
            <div className={styles.cta_links}>
              <a href="mailto:darobotscomp@gmail.com">Email us</a>
              <a href="https://t.me/darobots_bot">Contact on Telegram</a>
            </div>
          </div>

          <div className={styles.back_link}>
            <Link href="/en#cases">View all case studies</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
