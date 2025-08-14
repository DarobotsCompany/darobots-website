'use client';

import styles from './ExpertsBlock.module.scss';

import Image from 'next/image';

import Button from '@/components/ui/Button/Button';

import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';

import { setShowForm } from '@/redux/slices/formSlice';

import { useAppDispatch } from '@/hooks/redux-hooks';

import Avatar from '@/../public/avatar.png';
import LineLeft from '@/../public/line-left.svg';
import LineRight from '@/../public/line-right.svg';
import VerticalLine from '@/../public/vertical-line.svg';
import { ibmPlexFont } from '@/fonts';

export default function ExpertsContactCard() {
  const dispatch = useAppDispatch();

  const handleOpenForm = () => {
    dispatch(setShowForm(true));
  };
  return (
    <div className={styles.card_root}>
      <div className={clsx([styles.wrapper, styles.active_card])}>
        <Image alt="Line" src={LineLeft} className={styles.left} />
        <Image alt="Line" src={LineRight} className={styles.right} />
        <Image alt="Line" src={VerticalLine} className={styles.vertical} />
        <Image alt="Line" src={VerticalLine} className={styles.vertical_bottom} />
        <span className={ibmPlexFont.className}>darobots</span>
        <h3>Сумніваєтесь у нашій експертизі?</h3>
        <p>
          Залиште заявку — <b>наш Founder особисто зв’яжеться з вами,</b> відповість на
          всі запитання та допоможе оцінити, чи підходимо ми вам як команда.
        </p>
        <Button onClick={handleOpenForm}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${Avatar.src})` }}
          >
            <div className={styles.active_dot} />
          </div>
          Залишити заявку <ChevronRight size={16} strokeWidth={3} />
        </Button>
      </div>
    </div>
  );
}
