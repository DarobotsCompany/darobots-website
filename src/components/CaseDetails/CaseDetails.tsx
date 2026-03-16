'use client';

import styles from './CaseDetails.module.scss';

import { useRouter } from 'next/navigation';

import Image from 'next/image';

import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import Button from '@/components/ui/Button/Button';

import { WORK_CASES_CARDS } from '@/constants/work-cases.cards';

import { useAppDispatch } from '@/hooks/redux-hooks';
import { setShowForm } from '@/redux/slices/formSlice';

import { ChevronRight } from 'lucide-react';

interface CaseDetailsProps {
  slug: string;
}

export default function CaseDetails({ slug }: CaseDetailsProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const currentCase = WORK_CASES_CARDS.find((card) => card.slug === slug);

  if (!currentCase) {
    router.push('/');
    return null;
  }

  const handleOpenForm = () => {
    dispatch(setShowForm(true));
  };

  return (
    <section className={styles.root}>
      <BreadCrumbs caseTitle={currentCase.name} />

      <div className={styles.info_block}>
        <div className={styles.image_block}>
          <Image
            alt={currentCase.name}
            src={currentCase.imageSrc}
            width={1200}
            height={680}
            priority
          />
          <span>{currentCase.platform}</span>
        </div>

        <h1>{currentCase.name}</h1>
        <p className={styles.description}>{currentCase.description}</p>

        <div className={styles.metrics_block}>
          {currentCase.points.map((point) => (
            <div key={point.label} className={styles.metric_card}>
              <span>{point.number}</span>
              <p>{point.label}</p>
            </div>
          ))}
        </div>

        <h3>Про проєкт</h3>
        {currentCase.fullDescription.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <h3>Виклик</h3>
        <p>{currentCase.challenge}</p>

        <h3>Рішення</h3>
        <p>{currentCase.solution}</p>

        <h3>Результати</h3>
        <ul>
          {currentCase.results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>

        <h3>Технології</h3>
        <div className={styles.technologies_block}>
          {currentCase.technologies.map((tech) => (
            <span key={tech} className={styles.tech_tag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.cta_block}>
          <h3>Хочете подібне рішення для свого бізнесу?</h3>
          <p>Обговоримо ваш проєкт та знайдемо оптимальне рішення</p>
          <Button isActive onClick={handleOpenForm}>
            Обговорити проєкт <ChevronRight size={16} strokeWidth={3} />
          </Button>
        </div>
      </div>
    </section>
  );
}
