'use client';

import styles from './ContactForm.module.scss';

import { type FormValues, formSchema } from '@/schemas/formSchema';

import Image from 'next/image';

import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import Textarea from '@/components/ui/Input/Textarea';
import PulseBadge from '@/components/ui/PulseBadge/PulseBadge';

import { zodResolver } from '@hookform/resolvers/zod';
import { InputMask } from '@react-input/mask';
import clsx from 'clsx';
import { ChevronRight, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { setShowForm } from '@/redux/slices/formSlice';

import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';

import { sendFormToTelegram } from '@/utils/sendFormToTelegram';

import BotIcon from '@/../public/bot-icon.svg';

export default function ContactForm() {
  const { showForm } = useAppSelector((state) => state.formSlice);

  const {
    register,
    handleSubmit,
    reset,

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

  const handleCloseForm = () => {
    dispatch(setShowForm(false));
  };

  const onSubmit = (data: FormValues) => {
    const string = `Ім'я: ${data.name} \nНомер телефону: ${data.phone} \nПовідомлення: ${data.message}`;
    sendFormToTelegram(string);
    toast.success('Повідомлення успішно відправлене!');
    reset();
    handleCloseForm();
  };

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
            <InputMask
              mask="+38 (___) ___-__-__"
              replacement={{ _: /\d/ }}
              label="Номер телефону"
              required
              isNotValid={!!errors.phone}
              placeholder="Введіть ваш номер телефону"
              autoComplete="off"
              {...register('phone')}
              component={Input}
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
