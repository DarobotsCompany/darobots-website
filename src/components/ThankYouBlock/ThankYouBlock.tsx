'use client';

import styles from './ThankYouBlock.module.scss';

import { useRouter } from 'next/navigation';

import Button from '../ui/Button/Button';

export default function ThankYouBlock() {
  const router = useRouter();

  const handleGoToMain = () => {
    router.push('/');
  };

  return (
    <section className={styles.root}>
      <div>
        <h1>Заявку отримано 🎉</h1>
        <p>Ми вже працюємо над вашим запитом і скоро з вами зв’яжемось.</p>
        <Button isActive onClick={handleGoToMain}>
          На головну
        </Button>
      </div>
    </section>
  );
}
