import type { WorkCasesCardType } from '@/types/work-cases-card.type';

import Changer from '@/../public/cases/changer.png';
import ChestVape from '@/../public/cases/chestvape.png';
import Dirom from '@/../public/cases/dirom.png';
import Estet from '@/../public/cases/estet.png';
import Linia from '@/../public/cases/linia.png';
import NovaClub from '@/../public/cases/novaclub.png';
import SpeakEasy from '@/../public/cases/speakEasy.png';

export const WORK_CASES_CARDS: WorkCasesCardType[] = [
  {
    order: 1,
    name: 'DIROM',
    description:
      'Telegram інтернет-магазин для автоматизації замовлень будівельних матеріалів',
    imageSrc: Dirom.src,
    points: [
      { number: '20%', label: 'Замовлень через чат-бот' },
      { number: '0', label: 'Дзвінків менеджерам для замовлення' },
      { number: '24/7', label: 'Доступність магазину' },
    ],
  },
  {
    order: 2,
    name: 'Лінія підтримки 2345',
    description: 'Мультиплатформенний чат-бот для психологічної підтримки',
    imageSrc: Linia.src,
    points: [
      { number: '20 000+', label: 'Користувачів за перший тиждень' },
      { number: '50+', label: 'Психологів одночасно працюють' },
      { number: '100%', label: 'Конфіденційність та безпека даних' },
    ],
  },
  {
    order: 3,
    name: 'SpeakEasy',
    description: 'Маркетинговий чат-бот для школи англійської мови',
    imageSrc: SpeakEasy.src,
    points: [
      { number: '100%', label: 'Точність визначення рівня англійської' },
      { number: '-40%', label: 'Навантаження на викладачів' },
      { number: 'x2', label: 'Збільшення кількості нових учнів' },
    ],
  },
  {
    order: 4,
    name: 'CHANGER',
    description: 'Mini-app у Telegram-боті для оренди преміум-авто',
    imageSrc: Changer.src,
    points: [
      { number: '100%', label: 'Автопарку здано через чат-бот' },
      { number: '80%', label: 'Бронювань без менеджера' },
      { number: '+50%', label: 'До LTV клієнтів' },
    ],
  },
  {
    order: 5,
    name: 'Dr Estet Vel',
    description: 'Чат-бот для автоматизації запису клієнтів у косметологічній клініці',
    imageSrc: Estet.src,
    points: [
      { number: '40%', label: 'Записів через бот' },
      { number: '-80%', label: 'Навантаження на адміністраторів' },
      { number: '100%', label: 'Готовність до масштабування' },
    ],
  },
  {
    order: 6,
    name: 'ChestVape',
    description: 'Бонусна карта лояльності в чат-боті для мережі магазинів',
    imageSrc: ChestVape.src,
    points: [
      { number: 'x3', label: 'Зростання виручки під час акцій' },
      { number: '+120%', label: 'До LTV клієнтів' },
      { number: '80%', label: 'Автоматична обробка запитів' },
    ],
  },
  {
    order: 7,
    name: 'NOVA CLUB',
    description: 'Чат-бот для автоматизації бізнес-спільноти та керування підписками',
    imageSrc: NovaClub.src,
    points: [
      { number: '2', label: 'Тижні до окупності бота' },
      { number: '100%', label: 'Автоматизація підписок та платежів' },
      { number: '+60%', label: 'зростання LTV клієнтів' },
    ],
  },
];
