import styles from './BreadCrumbs.module.scss';

import Link from 'next/link';

import clsx from 'clsx';

interface BreadCrumbsProps {
  blogTitle?: string;
  caseTitle?: string;
}

export default function BreadCrumbs({ blogTitle, caseTitle }: BreadCrumbsProps) {
  return (
    <div className={styles.root}>
      <Link href="/">Головна</Link>
      <span>/</span>
      {blogTitle !== undefined && (
        <>
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
        </>
      )}
      {caseTitle !== undefined && (
        <>
          <Link href="/#cases" className={clsx([!caseTitle && styles.active])}>
            Кейси
          </Link>
          {caseTitle && (
            <>
              <span>/</span>
              <span className={styles.active}>{caseTitle}</span>
            </>
          )}
        </>
      )}
    </div>
  );
}
