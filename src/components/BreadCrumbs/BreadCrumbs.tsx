import styles from './BreadCrumbs.module.scss';

import Link from 'next/link';

import clsx from 'clsx';

interface BreadCrumbsProps {
  blogTitle?: string;
}

export default function BreadCrumbs({ blogTitle }: BreadCrumbsProps) {
  return (
    <div className={styles.root}>
      <Link href="/">Головна</Link>
      <span>/</span>
      <Link href="/blog" className={clsx([!blogTitle && styles.active])}>
        Блог
      </Link>
      {blogTitle && (
        <>
          <span>/</span>
          <Link href="/blog" className={styles.active}>
            {blogTitle}
          </Link>
        </>
      )}
    </div>
  );
}
