/* eslint-disable @next/next/no-img-element */
import styles from './ExpertsBlock.module.scss';

import type { ExpertCardType } from '@/types/expert-card.type';

import { ibmPlexFont } from '@/fonts';

interface ExpertsCardProps {
  card: ExpertCardType;
}

export default function ExpertsCard({ card }: ExpertsCardProps) {
  return (
    <div className={styles.card_root}>
      <div className={styles.wrapper}>
        <div className={styles.top_block}>
          <div className={styles.icon}>
            <img alt={card.heading} src={card.iconSrc} width={36} height={37} />
          </div>
          <span className={ibmPlexFont.className}>0{card.order}</span>
        </div>
        <div className={styles.bottom_block}>
          <h3 dangerouslySetInnerHTML={{ __html: card.heading }} />
          <p>{card.description}</p>
        </div>
      </div>
    </div>
  );
}
