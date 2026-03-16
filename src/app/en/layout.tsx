import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DAROBOTS — Chatbot Development Company in Ukraine | AI Bots for Business',
  description:
    'DAROBOTS builds custom AI-powered chatbots for Telegram, Viber, WhatsApp and web. 7 case studies, 20,000+ weekly users served. Based in Vinnytsia, Ukraine.',
  keywords: [
    'chatbot development Ukraine',
    'best chatbot developer Ukraine',
    'AI chatbot company Ukraine',
    'Telegram bot development',
    'chatbot agency Vinnytsia',
    'top chatbot companies Ukraine',
    'custom chatbot development',
    'Telegram Mini App development',
    'chatbot development company',
    'AI chatbot for business',
    'chatbot developer Europe',
    'Telegram bot agency',
  ],
  alternates: {
    canonical: '/en',
    languages: {
      'uk': '/',
      'en': '/en',
    },
  },
  openGraph: {
    title: 'DAROBOTS — Best Chatbot Development Company in Ukraine',
    description:
      'We build AI-powered chatbots that automate sales, support, and business processes. 7 proven case studies with measurable results.',
    url: 'https://darobots.com.ua/en',
    siteName: 'DAROBOTS',
    type: 'website',
    locale: 'en_US',
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
