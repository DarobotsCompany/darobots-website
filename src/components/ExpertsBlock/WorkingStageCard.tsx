import styles from './ExpertsBlock.module.scss';

import type { WorkingStageCardType } from '@/types/working-stage-card.type';

import Image from 'next/image';

import clsx from 'clsx';

interface WorkingStageCardProps {
  card: WorkingStageCardType;
  className?: string;
}

export default function WorkingStageCard({ card, className }: WorkingStageCardProps) {
  return (
    <div className={clsx([styles.card_root, styles.stage_card, className])}>
      <div className={styles.wrapper}>
        <Image alt={card.heading} src={card.imageSrc} width={1536} height={1024} />
        <div className={styles.text}>
          <div className={styles.top_block}>
            <div className={styles.icon}>0{card.order}</div>
            <span>{card.heading}</span>
          </div>
          <p>{card.description}</p>
        </div>
      </div>
    </div>
  );
}
