'use client';

import styles from './Footer.module.scss';

import Link from 'next/link';

import clsx from 'clsx';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import useBlogPathname from '@/hooks/useBlogPathname';

import { NAVBAR_LINKS } from '@/constants/navbar-links';

export default function FooterNavbar() {
  const isBlogPage = useBlogPathname();

  return (
    <nav>
      <p>Навігація</p>
      <div className={styles.links}>
        {NAVBAR_LINKS.map((link) => {
          return isBlogPage ? (
            <Link
              key={link.label}
              href={`/${link.link}`}
              className={clsx([link.disabled && styles.disabled])}
            >
              {link.label}
            </Link>
          ) : (
            <AnchorLink
              key={link.label}
              href={link.link}
              className={clsx([link.disabled && styles.disabled])}
            >
              {link.label}
            </AnchorLink>
          );
        })}
      </div>
    </nav>
  );
}
