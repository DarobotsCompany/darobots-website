'use client';

import styles from './DiscusionCard.module.scss';

import { useMemo } from 'react';

import Image from 'next/image';

import PhoneSlider from '@/components/DiscusionCard/PhoneSlider';
import Button from '@/components/ui/Button/Button';
import PulseBadge from '@/components/ui/PulseBadge/PulseBadge';
import SwitchArrow from '@/components/ui/SwitchArrow/SwitchArrow';

import { ChevronRight } from 'lucide-react';

import { setShowForm } from '@/redux/slices/formSlice';

import { useAppDispatch } from '@/hooks/redux-hooks';
import useMediaQuery from '@/hooks/useMediaQuery';

import { MOBILE_MEDIA_QUERY_WIDTH, MONTHS_LOCATIVE } from '@/constants/index';

import Iphone2 from '@/../public/Frame2.png';
import Iphone3 from '@/../public/Frame3.png';
import Iphone4 from '@/../public/Frame4.png';
import Iphone5 from '@/../public/Frame5.png';
import Iphone from '@/../public/Frame.png';
import BotIcon from '@/../public/bot-icon-white.svg';

export default function DiscusionCard() {
  const currentMonth = useMemo(() => {
    const now = new Date();
    return MONTHS_LOCATIVE[now.getMonth()];
  }, []);

  const isMobile = useMediaQuery(`(max-width: ${MOBILE_MEDIA_QUERY_WIDTH})`);

  const dispatch = useAppDispatch();

  const handleOpenForm = () => {
    dispatch(setShowForm(true));
  };

  return (
    <section className={styles.root}>
      <div className={styles.text_block}>
        <div className={styles.top_wrapper}>
          <PulseBadge
            label={`Залишилося 5 місць на розробку в ${currentMonth}`}
            type="blue"
          />
          <div className={styles.heading}>
            {isMobile ? (
              <>
                <h3>
                  Ваш потенціал занадто великий,щоб витрачати час на рутину і гасіння
                  пожеж.
                </h3>
                <h3>
                  Передайте це{' '}
                  <span className={styles.image_wrapper}>
                    <Image alt="Bot" src={BotIcon} width={96} height={119} />
                  </span>{' '}
                  чат-боту та компанія почне зростати.
                </h3>
              </>
            ) : (
              <h3>
                Ваш потенціал занадто великий,щоб витрачати час на рутину і гасіння пожеж.
                Передайте це{' '}
                <span className={styles.image_wrapper}>
                  <Image alt="Bot" src={BotIcon} width={96} height={119} />
                </span>{' '}
                чат-боту та компанія почне зростати.
              </h3>
            )}

            <p>
              Наша місія — впроваджувати технології, що змінюють компанії та людей у них
              на краще.
            </p>
          </div>
        </div>
        <Button onClick={handleOpenForm}>
          <SwitchArrow messageIcon />
          Обговорити проєкт <ChevronRight size={16} strokeWidth={3} />
        </Button>
      </div>
      <div className={styles.mobile_slider}>
        <div className={styles.mobile_image_wrapper}>
          <Image src={Iphone3} alt={`phone`} width={780} height={1700} />
        </div>
        <div className={styles.mobile_image_wrapper}>
          <Image src={Iphone2} alt={`phone`} width={780} height={1700} />
        </div>
        <div className={styles.mobile_image_wrapper}>
          <Image src={Iphone} alt={`phone`} width={780} height={1700} />
          <Image src={Iphone4} alt={`phone`} width={780} height={1700} />
        </div>
        <div className={styles.mobile_image_wrapper}>
          <Image src={Iphone5} alt={`phone`} width={780} height={1700} />
        </div>
      </div>
      <div className={styles.slider_block}>
        <PhoneSlider direction="up" />
        <PhoneSlider direction="down" />
        <PhoneSlider direction="up" />
      </div>
    </section>
  );
}
