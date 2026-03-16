'use client';

import styles from './BlogPage.module.scss';

import type { BlogCardType } from '@/types/blog-card.type';

import { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Button from '@/components/ui/Button/Button';
import LoaderSpinner from '@/components/ui/Loader/LoaderSpinner';

import BlogCard from '../BlogCard';

import { BLOG_CARDS } from '@/constants/blog-cards';
import { BLOG_FILTERS } from '@/constants/blog-filters';

import BlogFilters from './BlogFilters';

export default function BlogPage() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const filter = searchParams.get('filter') ?? BLOG_FILTERS[0];

  const [blogCards, setBlogCards] = useState<BlogCardType[]>([]);

  useEffect(() => {
    const filteredCards =
      filter === BLOG_FILTERS[0]
        ? BLOG_CARDS
        : BLOG_CARDS.filter(
            (card) => card.category.toLowerCase() === filter.toLowerCase(),
          );

    setBlogCards(filteredCards);
    setIsLoading(false);
  }, [filter]);

  return (
    <section className={styles.root}>
      <BreadCrumbs />
      <div className={styles.heading}>
        <h3>Блог</h3>
        <BlogFilters />
      </div>
      {isLoading ? (
        <LoaderSpinner />
      ) : (
        <div className={styles.cards_row}>
          {blogCards.length > 0 ? (
            blogCards.map((blog) => {
              return <BlogCard key={blog.id} blog={blog} />;
            })
          ) : (
            <p className={styles.no_posts}>Немає публікацій у цій категорії</p>
          )}
        </div>
      )}

      {blogCards.length > 8 && (
        <Button buttonClassName={styles.more_btn} isActive>
          Показати більше
        </Button>
      )}
    </section>
  );
}
