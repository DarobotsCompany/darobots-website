'use client';

import styles from './Questions.module.scss';

import Button from '@/components/ui/Button/Button';
import SwitchArrow from '@/components/ui/SwitchArrow/SwitchArrow';

import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';

import { setShowForm } from '@/redux/slices/formSlice';

import { useAppDispatch } from '@/hooks/redux-hooks';

import { QUESTIONS } from '@/constants/questions';

import { montFont } from '@/fonts';

export default function Questions() {
  const dispatch = useAppDispatch();

  const handleOpenForm = () => {
    dispatch(setShowForm(true));
  };
  return (
    <section className={styles.root}>
      <div className={styles.heading}>
        <h3>
          Відповіді на найчастіші <b>запитання</b>
        </h3>
        <Button size="small" onClick={handleOpenForm}>
          <SwitchArrow messageIconActive /> Задати своє питання{' '}
          <ChevronRight size={16} strokeWidth={3} />
        </Button>
      </div>
      <div className={styles.questions_block}>
        <Accordion
          allowMultipleExpanded
          allowZeroExpanded
          className={clsx([styles.accordion, montFont.className])}
        >
          {QUESTIONS.map((question, index) => {
            return (
              <AccordionItem key={index} className={styles.accordion_item}>
                <AccordionItemHeading className={styles.accordion_heading}>
                  <AccordionItemButton>
                    <AccordionItemState>
                      {({ expanded }) => (
                        <>
                          <p>{question.heading}</p>
                          <SwitchArrow
                            iconType={expanded ? 'x' : 'plus'}
                            className={clsx([
                              styles.switch_button,
                              expanded && styles.expanded_button,
                            ])}
                          />
                        </>
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel
                  className={styles.accordion_body}
                  dangerouslySetInnerHTML={{ __html: question.description }}
                />
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
