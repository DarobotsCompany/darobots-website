/* eslint-disable @next/next/no-img-element */
import Script from 'next/script';

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
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PKVZZ8P');
        `,
          }}
        />
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2004985626911899');
        fbq('track', 'PageView');`}
        </Script>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
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
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=2004985626911899&ev=PageView&noscript=1"
              alt="fb pixel"
            />
          </noscript>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PKVZZ8P"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          {children}
          <Toaster />
          <ContactForm />
        </body>
      </ReduxProvider>
    </html>
  );
}
