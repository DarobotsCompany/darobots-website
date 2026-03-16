import styles from './Blog.module.scss';

import type { BlogCardType } from '@/types/blog-card.type';

import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

import { parseTitleToURL } from '@/utils/parse-title';

interface BlogCardProps {
  blog: BlogCardType;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className={styles.card_root}>
      <div className={styles.wrapper}>
        <div
          className={styles.image_block}
          style={{ backgroundImage: `url(${blog.imageUrl})` }}
        >
          <span>{blog.category}</span>
        </div>
        <div className={styles.text_block}>
          <div>
            <span>{blog.date}</span>
            <h3>{blog.title}</h3>
          </div>
          <Link
            href={`/blog/${parseTitleToURL(blog.title)}?id=${blog.id}`}
            className={styles.read_more}
          >
            Читати далі <ChevronRight size={16} strokeWidth={3} />
          </Link>
        </div>
      </div>
    </div>
  );
}
