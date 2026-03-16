'use client';

import styles from './ContactForm.module.scss';

import { type FormValues, formSchema } from '@/schemas/formSchema';

import { useEffect } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import Textarea from '@/components/ui/Input/Textarea';
import PulseBadge from '@/components/ui/PulseBadge/PulseBadge';

import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { ChevronRight, X } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { setShowForm } from '@/redux/slices/formSlice';

import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';

import { getUtmParams } from '@/utils/get-utm-params';
import { trackGAEvent } from '@/utils/google-analytics';
import { normalizePhone } from '@/utils/normalize-phone';
import { sendFormToTelegram } from '@/utils/sendFormToTelegram';

import BotIcon from '@/../public/bot-icon.svg';

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default function ContactForm() {
  const { showForm } = useAppSelector((state) => state.formSlice);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    values: {
      name: '',
      phone: '',
      message: '',
    },
    resolver: zodResolver(formSchema),
  });

  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleCloseForm = () => {
    dispatch(setShowForm(false));
  };

  const onSubmit = (data: FormValues) => {
    const normalizedPhone = normalizePhone(data.phone);

    const messageToSend =
      '🔔 Нова заявка з сайту:\n' +
      `👤 Ім'я: ${data.name}\n` +
      `📱 Телефон: ${normalizedPhone}\n` +
      `💬 Повідомлення: ${data.message || 'Не вказано'}\n` +
      '📊 UTM мітки:\n' +
      `utm_source: ${data.utm_source || 'Не вказано'}\n` +
      `utm_medium: ${data.utm_medium || 'Не вказано'}\n` +
      `utm_campaign: ${data.utm_campaign || 'Не вказано'}\n` +
      `utm_term: ${data.utm_term || 'Не вказано'}`;

    sendFormToTelegram(messageToSend);

    trackGAEvent('leadosik', 'leadosik', 'leadosik');

    router.push('/thank-you-bot-tg');
    reset();
    handleCloseForm();
  };

  useEffect(() => {
    const utms = getUtmParams();
    setValue('utm_source', utms.utm_source || '');
    setValue('utm_medium', utms.utm_medium || '');
    setValue('utm_campaign', utms.utm_campaign || '');
    setValue('utm_term', utms.utm_term || '');
  }, [setValue]);

  return (
    <>
      <section className={clsx([styles.root, showForm && styles.show])}>
        <div className={styles.wrapper}>
          <X size={22} onClick={handleCloseForm} className={styles.close_btn} />
          <div className={styles.heading}>
            <PulseBadge type="green" label="Зв'язок" className={styles.pulse} />
            <h3>
              Заповніть форму і ми звʼяжемось з вами{' '}
              <span className={styles.image_wrapper}>
                <Image alt="Bot" src={BotIcon} width={96} height={119} />
              </span>
            </h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              label="Ім'я"
              placeholder="Введіть ваше ім'я"
              required
              autoComplete="off"
              {...register('name')}
            />
            <Input
              label="Номер телефону"
              required
              isNotValid={!!errors.phone}
              placeholder="Введіть ваш номер телефону"
              autoComplete="off"
              {...register('phone', {
                onChange: (e) => {
                  e.target.value = e.target.value.replace(/\D/g, '');
                },
                required: 'Введіть номер телефону',
                pattern: {
                  value: /^\d+$/,
                  message: 'Допустимі лише цифри',
                },
              })}
            />
            <Textarea
              label="Нотатки"
              autoComplete="off"
              placeholder="Розкажіть про проєкт (не обовʼязково)"
              {...register('message')}
            />
            <Button isActive type="submit" buttonClassName={styles.submit_btn}>
              Відправити <ChevronRight size={16} strokeWidth={3} />
            </Button>
          </form>
        </div>
      </section>
      <div
        className={clsx([styles.overlay, showForm && styles.show])}
        onClick={handleCloseForm}
      />
    </>
  );
}
