import type { BlogCardType } from '@/types/blog-card.type';

import BlogImage from '@/../public/blog/blog-1.png';
import BlogImage2 from '@/../public/blog/blog-2.png';
import BlogImage3 from '@/../public/blog/blog-3.png';

export const BLOG_CARDS: BlogCardType[] = [
  {
    id: '1',
    category: 'корисне',
    date: '03.12.2025',
    title: 'Що таке чат-бот і навіщо він бізнесу у 2025 році',
    link: '#',
    imageUrl: BlogImage.src,
  },
  {
    id: '2',
    category: 'корисне',
    date: '03.12.2025',
    title: 'Скільки коштує розробка чат-бота в Україні у 2025 році?',
    link: '#',
    imageUrl: BlogImage2.src,
  },
  {
    id: '3',
    category: 'поради',
    date: '03.12.2025',
    title:
      'Чи може AI замінити співробітників? Чому бізнесу варто забути про цю ідею у 2025 році 🤖',
    link: '#',
    imageUrl: BlogImage3.src,
  },
];
