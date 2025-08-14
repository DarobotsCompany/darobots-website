import type { WorkingStageCardType } from '@/types/working-stage-card.type';

import Image1 from '@/../public/stages/image_1.jpg';
import Image2 from '@/../public/stages/image_2.jpg';
import Image3 from '@/../public/stages/image_3.jpg';
import Image4 from '@/../public/stages/image_4.jpg';

export const STAGES_CARDS: WorkingStageCardType[] = [
  {
    heading: 'Аналіз та планування',
    order: 1,
    description:
      'Проводимо зустріч, занурюємось у ваш бізнес та аналізуємо процеси. Готуємо і презентуємо пропозицію рішення по функціоналу чат-бота з урахуванням ваших побажань.',
    imageSrc: Image1.src,
  },
  {
    heading: 'Узгодження і підготовка до старту',
    description:
      'Затверджуємо з вами фінальне бачення проєкту, розраховуємо точну вартість і терміни реалізації. Формуємо детальне технічне завдання, схеми взаємодії та укладаємо договір.',
    order: 2,
    imageSrc: Image2.src,
  },
  {
    heading: 'Розробка і тестування',
    description:
      'Створюємо чат-бот на оптимальній платформі чи пишемо власний, інтегруємо потрібні сервіси. Проводимо внутрішнє та зовнішнє тестування на наявність повилок, погоджуємо функціонал і якість.',
    order: 3,
    imageSrc: Image3.src,
  },
  {
    heading: 'Запуск і підтримка',
    description:
      'Запускаємо бот, навчаємо вашу команду ним користуватись. Надаємо гарантію стабільної роботи, підтримуємо і покращуємо чат-бот на основі зворотного зв’язку та аналітики',
    order: 4,
    imageSrc: Image4.src,
  },
];
