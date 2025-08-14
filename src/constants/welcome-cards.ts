import type { WelcomeCardType } from '@/types/welcome-card.type';

import Briefcase from '@/../public/briefcase.svg';

export const WELCOME_CARDS: WelcomeCardType[] = [
  {
    heading: '24/7 відповідь без менеджера',
    description: 'Бот відповідає миттєво, навіть вночі',
    iconSrc: Briefcase.src,
    order: 1,
  },
  {
    heading: 'Працює вже за 7 днів',
    description: 'Запускаємо MVP під ваш бізнес',
    iconSrc: Briefcase.src,
    order: 2,
  },
  {
    heading: 'Telegram / Viber / WhatsApp',
    description: 'Працює там, де ваші клієнти',
    iconSrc: Briefcase.src,
    order: 3,
  },
  {
    heading: 'Без шаблонів — лише кастом',
    description: 'Пишемо під ваш сценарій',
    iconSrc: Briefcase.src,
    order: 4,
  },
];
