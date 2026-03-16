'use client';

import styles from './BlogPage.module.scss';

import { useEffect, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import Button from '@/components/ui/Button/Button';

import { BLOG_FILTERS } from '@/constants/blog-filters';

export default function BlogFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialFilter = searchParams.get('filter') ?? BLOG_FILTERS[0];

  const [isActive, setIsActive] = useState(initialFilter);

  const handleFilterClick = (filter: string) => {
    setIsActive(filter);

    const params = new URLSearchParams(window.location.search);

    if (filter === BLOG_FILTERS[0]) {
      params.delete('filter');
    } else {
      params.set('filter', filter);
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.replace(newUrl, { scroll: false });
  };

  useEffect(() => {
    if (initialFilter !== isActive) {
      setIsActive(initialFilter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialFilter]);

  return (
    <div className={styles.filters}>
      {BLOG_FILTERS.map((filter) => (
        <Button
          key={filter}
          isActive={isActive === filter}
          onClick={() => handleFilterClick(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}
