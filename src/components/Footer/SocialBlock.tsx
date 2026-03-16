import styles from './Footer.module.scss';

import Image from 'next/image';

import Instagram from '@/../public/instagram.svg';
import Telegram from '@/../public/telegram.svg';

export default function SocialBlock() {
  return (
    <div className={styles.icons}>
      <a href="https://t.me/darobots_bot" target="_blank" rel="noreferrer">
        <Image alt="Telegram" src={Telegram} width={48} height={49} />
      </a>
      <a href="https://instagram.com/darobots_ua/" target="_blank" rel="noreferrer">
        <Image alt="Instagram" src={Instagram} width={48} height={49} />
      </a>
    </div>
  );
}
