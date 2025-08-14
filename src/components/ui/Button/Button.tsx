'use client';

import styles from './Button.module.scss';

import clsx from 'clsx';

import { interFont } from '@/fonts';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  isActive?: boolean;
  children: React.ReactNode;
  buttonClassName?: string;
  size?: 'small' | 'normal';
  isUnderline?: boolean;
}

export default function Button({
  isDisabled,
  isActive,
  children,
  buttonClassName,
  size,
  isUnderline,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx([
        styles.root,
        isDisabled && styles.disabled,
        interFont.className,
        isActive && styles.active,
        buttonClassName,
        size === 'small' && styles.small,
        isUnderline && styles.underline,
      ])}
    >
      {children}
    </button>
  );
}
