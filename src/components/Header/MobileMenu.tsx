'use client';

import styles from './Header.module.scss';

import clsx from 'clsx';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { NAVBAR_LINKS } from '@/constants/navbar-links';

interface MobileMenuProps {
  showMenu: boolean;
  setShowMenu: (arg: boolean) => void;
}

export default function MobileMenu({ showMenu, setShowMenu }: MobileMenuProps) {
  return (
    <div className={clsx([styles.mobile_menu, showMenu && styles.show_menu])}>
      <div className={styles.mobile_wrapper}>
        <nav>
          <p>Навігація</p>
          <div className={styles.links}>
            {NAVBAR_LINKS.map((link) => {
              return (
                <AnchorLink
                  key={link.label}
                  href={link.link}
                  className={clsx([link.disabled && styles.disabled])}
                  onClick={() => setShowMenu(false)}
                >
                  {link.label}
                </AnchorLink>
              );
            })}
          </div>
        </nav>
        <div className={styles.circles}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className={styles.circle} />
          ))}
        </div>
      </div>
    </div>
  );
}
