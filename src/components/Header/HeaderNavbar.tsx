'use client';

import styles from './Header.module.scss';

import Link from 'next/link';

import clsx from 'clsx';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import useBlogPathname from '@/hooks/useBlogPathname';

import { NAVBAR_LINKS } from '@/constants/navbar-links';

export default function HeaderNavbar() {
  const isBlogPage = useBlogPathname();

  return (
    <nav>
      {NAVBAR_LINKS.map((link) => {
        return isBlogPage && link.link !== '#footer' ? (
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
    </nav>
  );
}
