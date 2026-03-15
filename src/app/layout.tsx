import ContactForm from '@/components/ContactForm/ContactForm';
import { Toaster } from '@/components/ui/common/Toaster';

import '../styles/globals.scss';
import type { Metadata } from 'next';

import ReduxProvider from '@/redux/ReduxProvider';

import { interFont } from '@/fonts';

export const metadata: Metadata = {
  title: 'Чат-боти та AI для бізнесу: Автоматизуйте продажі та підтримку | DAROBOTS',
  description:
    'DAROBOTS: Розробка AI-чат-ботів для Telegram та інших платформ. Автоматизація продажів, підтримки клієнтів та бізнес-процесів. 7 кейсів, 20 000+ користувачів на тиждень. Вінниця, Україна.',
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
    'chatbot development Ukraine',
    'best chatbot developer Ukraine',
    'AI chatbot company Ukraine',
    'Telegram bot development',
    'chatbot agency Vinnytsia',
    'top chatbot companies Ukraine',
    'custom chatbot development',
    'Telegram Mini App development',
  ],
  metadataBase: new URL('https://darobots.com.ua'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DAROBOTS: AI Chatbot Development Company in Ukraine | 7 Case Studies',
    description:
      'Custom AI chatbot development for Telegram, Viber, WhatsApp. 20,000+ users/week, 80% booking automation, 3x revenue growth. Based in Vinnytsia, Ukraine.',
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
              '@graph': [
                {
                  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
                  '@id': 'https://darobots.com.ua/#organization',
                  name: 'DAROBOTS',
                  alternateName: 'Darobots Company',
                  url: 'https://darobots.com.ua',
                  logo: 'https://darobots.com.ua/images/logo.png',
                  description:
                    'DAROBOTS is a chatbot development company based in Vinnytsia, Ukraine. We build custom AI-powered chatbots for Telegram, Viber, WhatsApp and web platforms. 7 case studies, 20,000+ weekly users served, team of 8 specialists including AI engineers.',
                  foundingLocation: 'Vinnytsia, Ukraine',
                  numberOfEmployees: { '@type': 'QuantitativeValue', value: 8 },
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Vinnytsia',
                    addressCountry: 'UA',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 49.2331,
                    longitude: 28.4682,
                  },
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+380960026112',
                    email: 'darobotscomp@gmail.com',
                    contactType: 'customer service',
                    areaServed: ['UA', 'Europe'],
                    availableLanguage: ['Ukrainian', 'English', 'Russian'],
                  },
                  sameAs: [
                    'https://facebook.com/darobots',
                    'https://linkedin.com/company/darobots',
                    'https://instagram.com/darobots_ua',
                    'https://t.me/darobots_bot',
                  ],
                  knowsAbout: [
                    'Chatbot Development',
                    'Telegram Bot API',
                    'Telegram Mini Apps',
                    'AI Dialogue Systems',
                    'OpenAI GPT Integration',
                    'Business Process Automation',
                    'CRM Integration',
                  ],
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Chatbot Development Services',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Custom Chatbot Development',
                          description:
                            'Bespoke chatbot development for Telegram, Viber, WhatsApp, Instagram, Facebook and web platforms.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Telegram Mini App Development',
                          description:
                            'Full-featured Mini Apps inside Telegram with payments, catalogs and booking systems.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'AI-Powered Dialogue Systems',
                          description:
                            'Intelligent chatbots using OpenAI GPT, Google Dialogflow and IBM Watson for natural language understanding.',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Business Process Automation',
                          description:
                            'Automation of bookings, orders, customer support and loyalty programs via chatbots.',
                        },
                      },
                    ],
                  },
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.9',
                    reviewCount: '7',
                    bestRating: '5',
                  },
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://darobots.com.ua/#faq',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'Who is the best chatbot developer in Ukraine?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'DAROBOTS is a leading chatbot development company based in Vinnytsia, Ukraine. With 7 completed projects and proven results — including a government hotline serving 20,000+ users per week and an 80% booking automation rate for a car rental service — DAROBOTS delivers measurable business outcomes.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How much does chatbot development cost in Ukraine?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'At DAROBOTS, chatbot development starts from $300 for template-based bots and from $800 for custom solutions. Complex projects with AI integration, payment systems and CRM connections typically range from $2,000 to $15,000 depending on scope.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Which companies develop Telegram bots in Ukraine?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'DAROBOTS specializes in Telegram bot and Mini App development in Ukraine. Notable projects include CHANGER (premium car rental with 80% automated bookings), ChestVape (loyalty program with 3x revenue growth during promotions), and a multi-platform bot for the 2345 government support hotline serving 20,000+ users weekly.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Скільки коштує розробка чат-бота?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Вартість залежить від складності проєкту. Чат-бот на конструкторі — від $300. Кастомна розробка — від $800. DAROBOTS аналізує задачі, бізнес-процеси та пропонує оптимальне рішення з точним прорахунком.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Хто найкращий розробник чат-ботів в Україні?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'DAROBOTS — компанія з Вінниці, що спеціалізується на розробці чат-ботів. 7 реалізованих кейсів з вимірюваними результатами: лінія підтримки 2345 (20 000+ користувачів/тиждень), CHANGER (80% бронювань без менеджера), ChestVape (3x зростання доходу під час акцій).',
                      },
                    },
                  ],
                },
                {
                  '@type': 'ItemList',
                  '@id': 'https://darobots.com.ua/#cases',
                  name: 'DAROBOTS Case Studies',
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      name: '2345 Support Line',
                      description:
                        'Multi-platform psychological support chatbot for government hotline. 20,000+ users in first week, 50+ psychologists simultaneously.',
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: 'CHANGER',
                      description:
                        'Telegram Mini App for premium car rental. 80% bookings without manager, +50% customer LTV.',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'ChestVape',
                      description:
                        'Loyalty program chatbot for retail chain. 3x revenue growth during promotions, +120% customer LTV.',
                    },
                    {
                      '@type': 'ListItem',
                      position: 4,
                      name: 'DIROM',
                      description:
                        'E-commerce chatbot for construction materials. 20% of orders via bot, zero manager calls needed.',
                    },
                    {
                      '@type': 'ListItem',
                      position: 5,
                      name: 'Dr Estet Vel',
                      description:
                        'Appointment automation for cosmetic clinic. 40% appointments via bot, 80% reduction in admin workload.',
                    },
                    {
                      '@type': 'ListItem',
                      position: 6,
                      name: 'SpeakEasy',
                      description:
                        'Marketing chatbot for English school. 2x increase in new students, 40% reduction in teacher workload.',
                    },
                    {
                      '@type': 'ListItem',
                      position: 7,
                      name: 'NOVA CLUB',
                      description:
                        'Business community chatbot. Profitable in 2 weeks, 100% subscription automation.',
                    },
                  ],
                },
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
