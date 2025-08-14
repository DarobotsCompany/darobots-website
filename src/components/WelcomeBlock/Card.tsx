import styles from './WelcomeBlock.module.scss';

import type { WelcomeCardType } from '@/types/welcome-card.type';

import Image from 'next/image';

import clsx from 'clsx';

import { ibmPlexFont } from '@/fonts';

interface CardProps {
  card: WelcomeCardType;
}

export default function Card({ card }: CardProps) {
  return (
    <div className={styles.card_root}>
      <div className={styles.icon}>
        <Image alt={card.heading} src={card.iconSrc} width={36} height={37} />
      </div>
      <p>{card.heading}</p>
      <span className={styles.sample_span}>{card.description}</span>
      <span className={clsx([styles.card_count, ibmPlexFont.className])}>
        {card.order}/4
      </span>
    </div>
  );
}
