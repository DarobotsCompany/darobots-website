'use client';

import styles from './Footer.module.scss';

import FooterNavbar from '@/components/Footer/FooterNavbar';
import SocialBlock from '@/components/Footer/SocialBlock';
import Button from '@/components/ui/Button/Button';
import Logo from '@/components/ui/Logo/Logo';

import { ChevronRight } from 'lucide-react';

import { setShowForm } from '@/redux/slices/formSlice';

import { useAppDispatch } from '@/hooks/redux-hooks';

export default function Footer() {
  const dispatch = useAppDispatch();

  const handleOpenForm = () => {
    dispatch(setShowForm(true));
  };
  return (
    <footer className={styles.root} id="footer">
      <div className={styles.main_block}>
        <div className={styles.logo_block}>
          <Logo withBorder className={styles.logo} />
          <SocialBlock />
        </div>
        <div className={styles.navigation_block}>
          <FooterNavbar />
          <nav className={styles.contact_block}>
            <p>Контакти</p>
            <div className={styles.links}>
              <a
                href="https://maps.app.goo.gl/VoRkkQyK5hZTZjkn6"
                target="_blank"
                rel="noreferrer"
              >
                Вінниця, Україна
              </a>
              <a href="mailto:darobotscomp@gmail.com" target="_blank" rel="noreferrer">
                darobotscomp@gmail.com
              </a>
              <a href="tel:+380960026112" target="_blank" rel="noreferrer">
                +380 96 002 61 12
              </a>
              <SocialBlock />
            </div>
            <Button isActive onClick={handleOpenForm}>
              Обговорити проєкт <ChevronRight size={16} strokeWidth={3} />
            </Button>
          </nav>
        </div>
        <div className={styles.circles}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className={styles.circle} />
          ))}
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2025 Darobots. Всі права захищені.</p>
        <div className={styles.legal_links}>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
