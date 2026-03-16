import { Suspense } from 'react';

import BlogPage from '@/components/Blog/BlogPage/BlogPage';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import LoaderComponent from '@/components/ui/Loader/LoaderComponent';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Блог про чат-боти та AI для бізнесу | DAROBOTS',
  description:
    'Читайте корисні статті про чат-боти, AI-технології та автоматизацію бізнесу. Поради, кейси та тренди від команди DAROBOTS, щоб зробити ваш бізнес ефективнішим.',
  openGraph: {
    title: 'Блог про чат-боти та AI для бізнесу | DAROBOTS',
    description:
      'Читайте корисні статті про чат-боти, AI-технології та автоматизацію бізнесу. Поради, кейси та тренди від команди DAROBOTS, щоб зробити ваш бізнес ефективнішим.',
    url: 'https://darobots.com.ua/blog',
    siteName: 'DAROBOTS',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Блог про чат-боти та AI для бізнесу | DAROBOTS',
    description:
      'Читайте корисні статті про чат-боти, AI-технології та автоматизацію бізнесу. Поради, кейси та тренди від команди DAROBOTS, щоб зробити ваш бізнес ефективнішим.',
  },
};

export default function Blog() {
  return (
    <>
      <Header />
      <Suspense fallback={<LoaderComponent />}>
        <BlogPage />
      </Suspense>
      <Footer />
    </>
  );
}
