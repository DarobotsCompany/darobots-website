import styles from './ExpertsBlock.module.scss';

import Image from 'next/image';

import ExpertsCard from '@/components/ExpertsBlock/ExpertsCard';
import ExpertsContactCard from '@/components/ExpertsBlock/ExpertsContactCard';

import { MousePointer2 } from 'lucide-react';

import { EXPERT_CARDS } from '@/constants/expert-cards';

import MobileLine from '@/../public/mobile-experts-line.svg';

export default function ExpertsBlock() {
  return (
    <section className={styles.root}>
      <div className={styles.heading}>
        <Image
          alt="Line"
          src={MobileLine}
          width={269}
          height={12}
          className={styles.mobile_line}
        />
        <h3>
          Ви можете розраховувати на нашу <b>експертність</b>
        </h3>
        <div className={styles.arrow_block}>
          <span>Чому саме ми</span>
          <MousePointer2 className={styles.mouse_pointer} size={28} strokeWidth={1.5} />
        </div>
      </div>
      <div className={styles.cards_row}>
        {EXPERT_CARDS.map((card) => {
          return <ExpertsCard key={card.order} card={card} />;
        })}
        <ExpertsContactCard />
      </div>
    </section>
  );
}
