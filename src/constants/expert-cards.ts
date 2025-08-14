import type { ExpertCardType } from '@/types/expert-card.type';

import Briefcase from '@/../public/experts/briefcase.svg';
import Check from '@/../public/experts/check.svg';
import Document from '@/../public/experts/document-text.svg';
import Presentation from '@/../public/experts/presention-chart.svg';
import Clock from '@/../public/experts/timer-pause.svg';

export const EXPERT_CARDS: ExpertCardType[] = [
  {
    heading: 'Унікальний підхід до <b>кожного бізнесу</b>',
    description:
      'Аналізуємо ваші бізнес-процеси та створюємо рішення, яке органічно інтегрується у вашу компанію.',
    iconSrc: Briefcase.src,
    order: 1,
  },
  {
    heading: 'Підтримка після запуску — <b>без обмежень у часі</b>',
    description:
      'Ми не кидаємо клієнтів після запуску. Постійно допомагаємо вдосконалювати ботів, інтегрувати нові функції та адаптуватися до змін ринку.',
    iconSrc: Document.src,
    order: 2,
  },
  {
    heading: 'Спільне формування <b>техзавдання</b>',
    description:
      'Якщо у вас ще немає готового технічного завдання, ми все пропишемо разом з вами, щоб бот точно відповідав вашим цілям.',
    iconSrc: Clock.src,
    order: 3,
  },
  {
    heading: 'Гарантія<br/> <b>стабільної роботи</b>',
    description:
      'Даємо гарантію на нашу роботу. Якщо щось не працює з нашої вини — виправляємо безкоштовно. Ми не беремо гроші за підтримку лише тому, що наші проекти не ламаються.',
    iconSrc: Check.src,
    order: 4,
  },
  {
    heading: 'Боти, що приносять <b>результат</b>',
    description:
      'Наші боти не просто «висять», а допомагають економити час, підвищувати продажі і покращувати сервіс. Це все підтверджено реальними цифрами.',
    iconSrc: Presentation.src,
    order: 5,
  },
];
