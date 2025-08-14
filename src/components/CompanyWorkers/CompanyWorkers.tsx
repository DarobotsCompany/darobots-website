'use client';

import styles from './CompanyWorkers.module.scss';

import { useCallback, useEffect, useState } from 'react';

import CompanyWorkerCard from '@/components/CompanyWorkers/CompanyWorkerCard';
import SwitchArrow from '@/components/ui/SwitchArrow/SwitchArrow';

import useEmblaCarousel from 'embla-carousel-react';

import { TEAM_CARDS } from '@/constants/team-cards';

export default function CompanyWorkers() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi && canScrollPrev) emblaApi.scrollPrev();
  }, [emblaApi, canScrollPrev]);

  const scrollNext = useCallback(() => {
    if (emblaApi && canScrollNext) emblaApi.scrollNext();
  }, [emblaApi, canScrollNext]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className={styles.root} id="team">
      <div className={styles.heading}>
        <h3>
          Найкращі фахівці, що втілюють ваші ідеї в <b>інтелектуальні рішення</b>
        </h3>
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
      </div>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {TEAM_CARDS.map((card, index) => (
            <div className={styles.embla__slide} key={index}>
              <CompanyWorkerCard card={card} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.mobile_switches}>
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
    </section>
  );
}
