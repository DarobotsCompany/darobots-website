import ContactForm from '@/components/ContactForm/ContactForm';
import { Toaster } from '@/components/ui/common/Toaster';

import '../styles/globals.scss';
import type { Metadata } from 'next';

import ReduxProvider from '@/redux/ReduxProvider';

import { interFont } from '@/fonts';

export const metadata: Metadata = {
  title: 'Чат-боти та AI для бізнесу: Автоматизуйте продажі та підтримку | DAROBOTS',
  description:
    'DAROBOTS: Розробка AI-чат-ботів для Telegram та інших платформ. Автоматизація продажів, підтримки клієнтів та бізнес-процесів. Збільште ефективність з нашими AI ботами!',
  keywords: [
    'чат-боти',
    'розробка чат-ботів',
    'AI чат-боти',
    'чат-боти Телеграм',
    'AI боти',
    'автоматизація бізнесу',
    'бот для Telegram',
    'розробка ботів для Telegram',
    'AI для бізнесу',
    'чат-бот під ключ',
    'CRM-інтеграція',
    'воронки продаж',
    'бот для Viber',
    'автоматизація підтримки',
    'інтелектуальні боти',
  ],
  metadataBase: new URL('https://darobots.com.ua'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DAROBOTS: AI Чат-боти для Telegram та автоматизація вашого бізнесу',
    description:
      'Розробляємо ефективні AI-чат-боти для Telegram, Viber та інших платформ. Автоматизуйте продажі, підтримку та бізнес-процеси з DAROBOTS. Замовте консультацію!',
    url: 'https://darobots.com.ua',
    siteName: 'DAROBOTS',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DAROBOTS: AI Чат-боти для Telegram – Новий рівень автоматизації!',
    description:
      'Створюємо потужні AI-чат-боти для Telegram, що трансформують ваш бізнес. Автоматизація, продажі, підтримка. Дізнайтеся більше про рішення від DAROBOTS!',
    images: ['https://darobots.com.ua/images/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'DAROBOTS',
              url: 'https://darobots.com.ua',
              logo: 'https://darobots.com.ua/images/logo.png',
              description:
                'DAROBOTS – розробка AI-чат-ботів для Telegram та інших платформ, автоматизація бізнес-процесів, CRM-інтеграції та воронки продаж.',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+380960026112',
                contactType: 'customer service',
                areaServed: 'UA',
                availableLanguage: 'Ukrainian',
              },
              sameAs: [
                'https://facebook.com/darobots',
                'https://linkedin.com/company/darobots',
                'https://instagram.com/darobots',
              ],
            }),
          }}
        />
      </head>
      <ReduxProvider>
        <body className={interFont.className}>
          {children}
          <Toaster />
          <ContactForm />
        </body>
      </ReduxProvider>
    </html>
  );
}
