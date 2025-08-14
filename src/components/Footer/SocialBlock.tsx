import styles from './Footer.module.scss';

import Image from 'next/image';

import Facebook from '@/../public/facebook.svg';
import Instagram from '@/../public/instagram.svg';
import Telegram from '@/../public/telegram.svg';

export default function SocialBlock() {
  return (
    <div className={styles.icons}>
      <a href="https://t.me/frolovvd" target="_blank" rel="noreferrer">
        <Image alt="Telegram" src={Telegram} width={48} height={49} />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <Image alt="Instagram" src={Instagram} width={48} height={49} />
      </a>
      <a href="https://www.facebook.com/?locale=uk_UA" target="_blank" rel="noreferrer">
        <Image alt="Facebook" src={Facebook} width={48} height={49} />
      </a>
    </div>
  );
}
