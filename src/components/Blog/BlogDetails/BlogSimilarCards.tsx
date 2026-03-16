import styles from './BlogDetails.module.scss';

import BlogCard from '../BlogCard';

import { BLOG_CARDS } from '@/constants/blog-cards';

interface BlogSimilarCardsProps {
  category: string;
  cardId: string;
}

export default function BlogSimilarCards({ category, cardId }: BlogSimilarCardsProps) {
  return (
    BLOG_CARDS.filter(
      (card) => card.category === category && String(card.id) !== String(cardId),
    ).length > 0 && (
      <div className={styles.additional_blogs}>
        <h3>Схожі статті</h3>
        <div className={styles.cards_row}>
          {BLOG_CARDS.filter(
            (card) => card.category === category && String(card.id) !== String(cardId),
          ).map((card) => {
            return <BlogCard key={card.id} blog={card} />;
          })}
        </div>
      </div>
    )
  );
}
