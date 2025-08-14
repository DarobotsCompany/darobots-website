'use client';

import styles from './WorkStages.module.scss';

import { useState } from 'react';

import WorkingStageCard from '@/components/ExpertsBlock/WorkingStageCard';
import Button from '@/components/ui/Button/Button';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Square } from 'lucide-react';

import useMediaQuery from '@/hooks/useMediaQuery';

import { REMOVE_STAGES_TOGGLE_MEDIA_QUERY_WIDTH } from '@/constants/index';
import { STAGES_CARDS } from '@/constants/stage-cards';

import { ibmPlexFont } from '@/fonts';

export default function WorkStages() {
  const [showAll, setShowAll] = useState(false);

  const isShowAllStages = useMediaQuery(
    `(max-width: ${REMOVE_STAGES_TOGGLE_MEDIA_QUERY_WIDTH})`,
  );

  const handleToggle = () => setShowAll((prev) => !prev);

  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <div className={styles.heading}>
          <span className={ibmPlexFont.className}>
            <Square size={10} /> етапи нашої роботи
          </span>
          <h3>
            Як виглядає робота з нами: від <b>ідеї до запуску</b>
          </h3>
          <p>
            Ми не просто <b>«налаштовуємо бота»</b> — ми занурюємося в бізнес, шукаємо
            ефективні рішення і супроводжуємо вас на кожному етапі. Нижче — увесь шлях,
            який ми проходимо разом із клієнтом.
          </p>
        </div>
        {isShowAllStages ? (
          <div className={styles.cards_block}>
            {STAGES_CARDS.map((card) => {
              return <WorkingStageCard key={card.order} card={card} />;
            })}
          </div>
        ) : (
          <div className={styles.cards_block}>
            <AnimatePresence initial={false}>
              {STAGES_CARDS.slice(0, showAll ? STAGES_CARDS.length : 1).map((card) => (
                <motion.div
                  key={card.order}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <WorkingStageCard card={card} />
                </motion.div>
              ))}
            </AnimatePresence>

            <Button
              isActive
              onClick={handleToggle}
              buttonClassName={styles.toggle_button}
            >
              {showAll ? 'Згорнути' : 'Показати всі етапи'}
              {showAll ? (
                <ChevronUp size={18} strokeWidth={3} />
              ) : (
                <ChevronDown size={18} strokeWidth={3} />
              )}
            </Button>
          </div>
        )}
      </article>
    </section>
  );
}
