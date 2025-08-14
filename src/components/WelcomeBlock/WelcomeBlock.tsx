'use client';

import styles from './WelcomeBlock.module.scss';

import Image from 'next/image';

import Button from '@/components//ui/Button/Button';
import Header from '@/components/Header/Header';
import CardsRow from '@/components/WelcomeBlock/CardsRow';
import PulseBadge from '@/components/ui/PulseBadge/PulseBadge';

import { ChevronRight } from 'lucide-react';

import { setShowForm } from '@/redux/slices/formSlice';

import { useAppDispatch } from '@/hooks/redux-hooks';

import BotIcon from '@/../public/bot-icon.svg';

export default function WelcomeBlock() {
  const dispatch = useAppDispatch();

  const handleOpenForm = () => {
    dispatch(setShowForm(true));
  };

  return (
    <section className={styles.root} id="welcome">
      <Header />
      <PulseBadge
        label="Збільшили кількість заявок на 30% після запуску бота"
        type="green"
      />
      <div className={styles.text_block}>
        <h1 className={styles.heading}>
          Створюємо результативні{' '}
          <span className={styles.image_wrapper}>
            <Image alt="Bot" src={BotIcon} width={96} height={119} />
          </span>{' '}
          <b className={styles.bold}>чат-боти</b> та діалогові системи для бізнесу
        </h1>
        <p>
          Глибоко аналізуємо внутрішні процеси, щоб розробити рішення під ваші потреби —
          від кастомного коду до готових платформ або ШІ. Без шаблонів. Максимум користі.
        </p>
        <div className={styles.buttons}>
          <Button isActive onClick={handleOpenForm}>
            Обговорити проєкт <ChevronRight size={16} strokeWidth={3} />
          </Button>
          <Button onClick={handleOpenForm} buttonClassName={styles.desktop_btn}>
            Отримати безкоштовну консультацію
            <ChevronRight size={16} strokeWidth={3} />
          </Button>
          <Button
            isUnderline
            onClick={handleOpenForm}
            buttonClassName={styles.mobile_btn}
          >
            Отримати безкоштовну консультацію
          </Button>
        </div>
      </div>
      <CardsRow />
    </section>
  );
}
