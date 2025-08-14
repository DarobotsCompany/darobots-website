import styles from './WelcomeBlock.module.scss';

import Image from 'next/image';

import Card from '@/components/WelcomeBlock/Card';

import { WELCOME_CARDS } from '@/constants/welcome-cards';

import Iphone from '@/../public/Mockup-1-min.png';

export default function CardsRow() {
  return (
    <div className={styles.cards_block}>
      {WELCOME_CARDS.slice(0, 2).map((card) => {
        return <Card key={card.order} card={card} />;
      })}
      <Image
        alt="Darobots"
        src={Iphone}
        width={1000}
        height={1500}
        className={styles.iphone_image}
        priority
        fetchPriority="high"
      />
      {WELCOME_CARDS.slice(2).map((card) => {
        return <Card key={card.order} card={card} />;
      })}
    </div>
  );
}
