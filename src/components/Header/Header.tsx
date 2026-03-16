'use client';

import styles from './Header.module.scss';

import { useState } from 'react';

import HeaderNavbar from '@/components/Header/HeaderNavbar';
import MobileMenu from '@/components/Header/MobileMenu';
import Button from '@/components/ui/Button/Button';
import Logo from '@/components/ui/Logo/Logo';

import clsx from 'clsx';
import { ChevronRight, Dot } from 'lucide-react';

import { setShowForm } from '@/redux/slices/formSlice';

import { useAppDispatch } from '@/hooks/redux-hooks';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useAppDispatch();

  const handleOpenForm = () => {
    dispatch(setShowForm(true));
  };

  return (
    <header className={styles.root}>
      <Logo />
      <HeaderNavbar />
      <div className={styles.mobile_wrapper}>
        <Button
          isActive
          size="small"
          onClick={handleOpenForm}
          buttonClassName={styles.desktop_btn}
        >
          Обговорити проєкт <ChevronRight size={16} strokeWidth={3} />
        </Button>
        <Button size="small" onClick={handleOpenForm} buttonClassName={styles.mobile_btn}>
          Обговорити проєкт <ChevronRight size={14} strokeWidth={3} />
        </Button>
        <div
          className={clsx([styles.hamburger_icon, showMenu && styles.hamburger_open])}
          onClick={() => setShowMenu(!showMenu)}
        >
          <Dot size={25} strokeWidth={3} />
          <Dot size={25} strokeWidth={3} />
          <Dot size={25} strokeWidth={3} />
          <Dot size={25} strokeWidth={3} />
        </div>
      </div>
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
}
