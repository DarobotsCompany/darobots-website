'use client';

import styles from './BlogDetails.module.scss';

import { useRouter } from 'next/navigation';

import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

import { BLOG_CARDS } from '@/constants/blog-cards';
import { BLOG_CONTENT } from '@/constants/blog-content';

import BlogSimilarCards from './BlogSimilarCards';

interface BlogDetailsProps {
  blogId: string;
}

export default function BlogDetails({ blogId }: BlogDetailsProps) {
  const router = useRouter();

  const currentBlogCard = BLOG_CARDS.find((card) => String(card.id) === String(blogId));

  if (!currentBlogCard) {
    router.push('/blog');
    return null;
  }

  return (
    <section className={styles.root}>
      <BreadCrumbs blogTitle={currentBlogCard.title} />
      {BLOG_CONTENT[currentBlogCard.id]}
      <BlogSimilarCards category={currentBlogCard.category} cardId={currentBlogCard.id} />
    </section>
  );
}
