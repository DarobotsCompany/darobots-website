import styles from './Integrations.module.scss';

import Image from 'next/image';

// import Image from 'next/image';

// import Button from '@/components/ui/Button/Button';
// import SwitchArrow from '@/components/ui/SwitchArrow/SwitchArrow';

// import { ChevronRight } from 'lucide-react';

import {
  INTEGRATION_IMAGES_LEFT,
  INTEGRATION_IMAGES_RIGHT,
} from '@/constants/integrations-logos';

import { ibmPlexFont } from '@/fonts';

const chunkArray = (array: string[], numChunks: number) => {
  const chunks = [];
  const chunkSize = Math.ceil(array.length / numChunks);
  for (let i = 0; i < numChunks; i++) {
    chunks.push(array.slice(i * chunkSize, (i + 1) * chunkSize));
  }
  return chunks;
};

const imageChunks = chunkArray(
  [...INTEGRATION_IMAGES_LEFT, ...INTEGRATION_IMAGES_RIGHT],
  3,
);

export default function Integrations() {
  return (
    <section className={styles.root} id="integrations">
      <article className={styles.wrapper}>
        <div className={styles.images}>
          {INTEGRATION_IMAGES_LEFT.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="Integration Logo"
              className={styles[`img${index + 1}`]}
              width={80}
              height={80}
            />
          ))}
        </div>
        <div className={styles.text}>
          <span className={ibmPlexFont.className}>darobots</span>
          <h3>
            Сервіси з якими ми
            <br /> <b>інтегрувались</b>
          </h3>
          <p>Для більшості цих компаній ми маємо статус довірених партнерів</p>
          <div className={styles.mobile_images}>
            {imageChunks.map((chunk, rowIndex) => (
              <div key={rowIndex} className={styles.row}>
                {chunk.map((img, index) => (
                  <Image
                    key={`${rowIndex}-${index}`}
                    src={img}
                    alt="Integration Logo"
                    className={styles[`img${rowIndex * chunk.length + index + 1}`]}
                    width={80}
                    height={80}
                  />
                ))}
              </div>
            ))}
          </div>
          {/* <Button>
            <SwitchArrow settingsIcon /> Дивитись увесь список інтеграцій
            <ChevronRight size={16} strokeWidth={3} />
          </Button> */}
        </div>
        <div className={styles.images}>
          {INTEGRATION_IMAGES_RIGHT.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="Integration Logo"
              className={styles[`img${index + 1}`]}
              width={280}
              height={280}
            />
          ))}
        </div>
      </article>
    </section>
  );
}
