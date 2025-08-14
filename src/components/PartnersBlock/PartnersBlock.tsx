import styles from './PartnersBlock.module.scss';

import Image from 'next/image';

import PartnersSlider from '@/components/PartnersBlock/PartnersSlider';

import Line from '@/../public/line.svg';

export default function PartnersBlock() {
  return (
    <section className={styles.root}>
      <div className={styles.heading}>
        <Image alt="Separator" src={Line} width={247} height={9} />
        <p>Компанії, які вже автоматизують бізнес разом із Darobots</p>
        <Image alt="Separator" src={Line} width={247} height={9} />
      </div>
      <PartnersSlider />
    </section>
  );
}
