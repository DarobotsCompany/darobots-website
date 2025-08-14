'use client';

import styles from './DiscusionCard.module.scss';

import Image from 'next/image';

import Iphone2 from '@/../public/Frame2.png';
import Iphone3 from '@/../public/Frame3.png';
import Iphone4 from '@/../public/Frame4.png';
import Iphone5 from '@/../public/Frame5.png';
import Iphone from '@/../public/Frame.png';

const images_array = [
  Iphone,
  Iphone2,
  Iphone3,
  Iphone4,
  Iphone5,
  Iphone,
  Iphone2,
  Iphone3,
  Iphone4,
  Iphone5,
];

interface PhoneSliderProps {
  direction: 'up' | 'down';
}

export default function PhoneSlider({ direction }: PhoneSliderProps) {
  return (
    <div className={styles.sliderWrapper}>
      <div
        className={`${styles.scrollContainer} ${
          direction === 'down' ? styles.scrollDown : styles.scrollUp
        }`}
      >
        <div className={styles.scrollTrack}>
          {images_array.map((image, j) => (
            <div key={`item-${j}`} className={styles.imageWrapper}>
              <Image src={image} alt={`phone-${j}`} width={780} height={1700} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
