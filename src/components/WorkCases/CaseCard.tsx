'use client';

import styles from './WorkCases.module.scss';

import type { WorkCasesCardType } from '@/types/work-cases-card.type';

import Image from 'next/image';

import Button from '@/components/ui/Button/Button';

import clsx from 'clsx';
import { ChevronRight, Square } from 'lucide-react';

import { setShowForm } from '@/redux/slices/formSlice';

import { useAppDispatch } from '@/hooks/redux-hooks';

import { ibmPlexFont } from '@/fonts';

interface CaseCardProps {
  card: WorkCasesCardType;
  casesCount: number;
}

export default function CaseCard({ card, casesCount }: CaseCardProps) {
  const dispatch = useAppDispatch();

  const handleOpenForm = () => {
    dispatch(setShowForm(true));
  };
  return (
    <div className={styles.case_card}>
      <div className={styles.mobile_buttons_block}>
        <Button isActive onClick={handleOpenForm}>
          Обговорити проєкт <ChevronRight size={16} strokeWidth={3} />
        </Button>
        <Button>
          Детальніше <ChevronRight size={16} strokeWidth={3} />
        </Button>
      </div>
      <div className={styles.info_block}>
        <div className={styles.top_block}>
          <div className={clsx([styles.count_block, ibmPlexFont.className])}>
            <p>
              <Square size={10} /> наші кейси
            </p>
            <span>
              {card.order}/{casesCount}
            </span>
          </div>
          <div className={styles.heading}>
            <h3>{card.name}</h3>
            <p>{card.description}</p>
          </div>
        </div>
        <div className={styles.bottom_block}>
          <div className={styles.small_cards_block}>
            {card.points.map((point) => {
              return (
                <div key={point.label} className={styles.small_card}>
                  <span>{point.number}</span>
                  <p>{point.label}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.buttons_block}>
            <Button isActive onClick={handleOpenForm}>
              Обговорити проєкт <ChevronRight size={16} strokeWidth={3} />
            </Button>
            <Button>
              Детальніше <ChevronRight size={16} strokeWidth={3} />
            </Button>
          </div>
        </div>
      </div>
      <Image alt={card.name} src={card.imageSrc} width={483} height={547} />
    </div>
  );
}
