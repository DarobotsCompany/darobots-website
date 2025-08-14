import styles from './CompanyWorkers.module.scss';

import type { TeamCardType } from '@/types/team-card.type';

import RoleBadge from '@/components/ui/RoleBadge/RoleBadge';

interface CompanyWorkerCardProps {
  card: TeamCardType;
}

export default function CompanyWorkerCard({ card }: CompanyWorkerCardProps) {
  return (
    <div className={styles.card_root}>
      <div className={styles.image_block}>
        <div
          className={styles.image_block_wrapper}
          style={{ backgroundImage: `url(${card.imageSrc})` }}
        />
      </div>
      <div className={styles.text_block}>
        <div className={styles.top_block}>
          <p>{card.name}</p>
          <RoleBadge label={card.position} />
        </div>
        <p>{card.description}</p>
      </div>
    </div>
  );
}
