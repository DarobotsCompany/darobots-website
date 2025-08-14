'use client';

import styles from './Benefits.module.scss';

import { useCallback, useEffect, useMemo, useState } from 'react';

import Image from 'next/image';

import Button from '@/components/ui/Button/Button';
import LoaderSpinner from '@/components/ui/Loader/LoaderSpinner';
import SwitchArrow from '@/components/ui/SwitchArrow/SwitchArrow';

import useEmblaCarousel from 'embla-carousel-react';

import useMediaQuery from '@/hooks/useMediaQuery';

import { BENEFITS_CARDS, MOBILE_BENEFITS_CARDS } from '@/constants/benefits-cards';

import { MOBILE_BENEFITS_MEDIA_QUERY_WIDTH } from '@/constants';

export default function Benefits() {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_BENEFITS_MEDIA_QUERY_WIDTH})`);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const cards = useMemo(
    () => (isMobile ? MOBILE_BENEFITS_CARDS : BENEFITS_CARDS),
    [isMobile],
  );

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  if (!isClient) {
    return (
      <section className={styles.root} id="solutions">
        <h3>
          З Darobots ви отримуєте <b>менше рутини, більше заявок</b> і лояльніших клієнтів
        </h3>
        <LoaderSpinner />
      </section>
    );
  }

  return (
    <section className={styles.root} id="solutions">
      <h3>
        З Darobots ви отримуєте <b>менше рутини, більше заявок</b> і лояльніших клієнтів
      </h3>
      <div className={styles.top_controls}>
        {BENEFITS_CARDS.map((slide, index) => (
          <p
            key={slide.id}
            onClick={() => scrollTo(index)}
            className={selectedIndex === index ? styles.active : ''}
          >
            <b>{slide.id}</b> {slide.title}
          </p>
        ))}
      </div>
      <div className={styles.slider_wrapper}>
        <div className={styles.slider} ref={emblaRef}>
          <div className={styles.embla__container}>
            {cards.map((slide) => (
              <div className={styles.embla__slide} key={slide.id}>
                <Image
                  alt={slide.title || `Слайд ${slide.id}`}
                  src={slide.image}
                  width={1421}
                  height={683}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.switches}>
        <Button size="small" onClick={scrollPrev} isDisabled={!canScrollPrev}>
          <SwitchArrow iconType="leftArrow" className={styles.arrow} />
          Назад
        </Button>
        <Button size="small" onClick={scrollNext} isDisabled={!canScrollNext}>
          Далі
          <SwitchArrow iconType="rightArrow" className={styles.arrow} />
        </Button>
      </div>
    </section>
  );
}
