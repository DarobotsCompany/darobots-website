import type { TeamCardType } from '@/types/team-card.type';

import Bohdan from '@/../public/team/bohdan.png';
import Danylo from '@/../public/team/danylo.png';
import Vladyslav from '@/../public/team/vladyslav.jpg';
import Yulia from '@/../public/team/yulia.png';

export const TEAM_CARDS: TeamCardType[] = [
  {
    name: 'Данило',
    description:
      'Головний по ботах. Заснував компанію, бо ніхто інший не робив ботів так, як він хотів.',
    imageSrc: Danylo.src,
    position: 'founder',
  },
  {
    name: 'Юлія',
    description:
      'Людина, яка знає, коли буде готовий ваш проєкт, навіть якщо ви до нас ще не звернулись.',
    imageSrc: Yulia.src,
    position: 'ceo',
  },
  {
    name: 'Богдан',
    description:
      "Відповідає за інтеграції. Усе, що можна під'єднати — підключить. Те, що неможливо, теж підключить.",
    imageSrc: Bohdan.src,
    position: 'backend developer',
  },
  {
    name: 'Максим',
    description:
      'Якщо ваш чат-бот здався вам розумнішим за колегу – швидше за все, це його робота.',
    imageSrc: Danylo.src,
    position: 'chatbot developer',
  },
  {
    name: 'Владислав',
    description: 'Якщо щось виглядає незручно – значить, це зробив не Владислав.',
    imageSrc: Vladyslav.src,
    position: 'frontend developer',
  },
  {
    name: 'Кирило',
    description: 'Розуміє бізнес-процеси, навіть якщо ви самі їх ще не зрозуміли',
    imageSrc: Yulia.src,
    position: 'business analyst',
  },
  {
    name: 'Олексій',
    description:
      'Тренує бота не тільки розуміти людей, але й бути зрозумілішим за деяких із них.',
    imageSrc: Bohdan.src,
    position: 'ai engineer',
  },
];
