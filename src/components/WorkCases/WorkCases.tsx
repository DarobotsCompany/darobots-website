'use client';

import styles from './WorkCases.module.scss';

import { useCallback, useEffect, useState } from 'react';

import CaseCard from '@/components/WorkCases/CaseCard';
// import Button from '@/components/ui/Button/Button';
import SwitchArrow from '@/components/ui/SwitchArrow/SwitchArrow';

import clsx from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';
import { Square } from 'lucide-react';

import { WORK_CASES_CARDS } from '@/constants/work-cases.cards';

import { ibmPlexFont } from '@/fonts';

export default function WorkCases() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className={styles.root} id="workcases">
      <div className={styles.heading}>
        <p className={clsx([ibmPlexFont.className])}>
          <Square size={10} /> наші кейси
        </p>
        <h3>
          Як чат-боти <b>вирішують проблеми</b> в різних сферах
        </h3>
        {/* <Button>
          Дивитися усі кейси <ChevronRight size={16} strokeWidth={3} />{' '}
          <div className={styles.cases_count}>12</div>
        </Button> */}
      </div>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {WORK_CASES_CARDS.map((card) => (
            <div className={styles.embla__slide} key={card.order}>
              <CaseCard card={card} casesCount={WORK_CASES_CARDS.length} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.switches}>
        <SwitchArrow
          iconType="leftArrow"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        />
        <SwitchArrow
          iconType="rightArrow"
          onClick={scrollNext}
          disabled={!canScrollNext}
        />
      </div>
      {/* <Button buttonClassName={styles.mobile_button}>
        Дивитися усі кейси <ChevronRight size={16} strokeWidth={3} />{' '}
        <div className={styles.cases_count}>12</div>
      </Button> */}
    </section>
  );
}
