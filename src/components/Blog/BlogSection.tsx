import styles from './Blog.module.scss';

import Button from '../ui/Button/Button';
import { ChevronRight } from 'lucide-react';

import { BLOG_CARDS } from '@/constants/blog-cards';

import BlogCard from './BlogCard';

export default function BlogSection() {
  return (
    <section className={styles.root} id="blog">
      <div className={styles.heading}>
        <h3>Блог</h3>
        <Button isLink linkHref="/blog">
          Переглянути більше <ChevronRight size={16} strokeWidth={3} />
        </Button>
      </div>
      <div className={styles.cards_row}>
        {BLOG_CARDS.map((blog) => {
          return <BlogCard key={blog.id} blog={blog} />;
        })}
      </div>
    </section>
  );
}
