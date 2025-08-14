'use client';

import styles from './Footer.module.scss';

import clsx from 'clsx';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { NAVBAR_LINKS } from '@/constants/navbar-links';

export default function FooterNavbar() {
  return (
    <nav>
      <p>Навігація</p>
      <div className={styles.links}>
        {NAVBAR_LINKS.map((link) => {
          return (
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
