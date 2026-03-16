import type { TeamCardType } from '@/types/team-card.type';

import Alex from '@/../public/team/alex.jpg';
import Andriy from '@/../public/team/andriy.jpg';
import Bohdan from '@/../public/team/bohdan.jpg';
import Danylo from '@/../public/team/danil.jpg';
import Maks2 from '@/../public/team/maks-2.jpg';
import Maks from '@/../public/team/maks.jpg';
import Vladyslav from '@/../public/team/vladyslav.jpg';
import Yulia from '@/../public/team/yulia.jpg';

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
    position: 'middle backend developer',
  },
  {
    name: 'Максим',
    description:
      'Кодить швидше, ніж клієнти вигадують нові фічі. «Зараз зроблю» — його головна фраза.',
    imageSrc: Maks2.src,
    position: 'middle backend developer',
  },
  {
    name: 'Максим',
    description:
      'Якщо ваш чат-бот здався вам розумнішим за колегу – швидше за все, це його робота.',
    imageSrc: Maks.src,
    position: 'senior chatbot developer',
  },
  {
    name: 'Андрій',
    description:
      'Пише код так, щоб навіть база даних почувалася комфортно. Якщо завдання звучить «це неможливо» – значить, йому буде цікаво.',
    imageSrc: Andriy.src,
    position: 'middle backend developer',
  },
  {
    name: 'Владислав',
    description: 'Якщо щось виглядає незручно – значить, це зробив не Владислав.',
    imageSrc: Vladyslav.src,
    position: 'middle frontend developer',
  },
  {
    name: 'Олексій',
    description:
      'Тренує бота не тільки розуміти людей, але й бути зрозумілішим за деяких із них.',
    imageSrc: Alex.src,
    position: 'ai engineer',
  },
];
