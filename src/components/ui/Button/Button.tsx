'use client';

import styles from './Button.module.scss';

import Link from 'next/link';

import clsx from 'clsx';

import { interFont } from '@/fonts';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
  isActive?: boolean;
  children: React.ReactNode;
  buttonClassName?: string;
  size?: 'small' | 'normal';
  isUnderline?: boolean;
  isLink?: boolean;
  linkHref?: string;
}

export default function Button({
  isDisabled,
  isActive,
  children,
  buttonClassName,
  size,
  isUnderline,
  onClick,
  isLink,
  linkHref,
  ...props
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return isLink && linkHref ? (
    <Link
      className={clsx([
        styles.root,
        isDisabled && styles.disabled,
        interFont.className,
        isActive && styles.active,
        buttonClassName,
        size === 'small' && styles.small,
        isUnderline && styles.underline,
      ])}
      href={linkHref}
    >
      {children}
    </Link>
  ) : (
    <button
      {...props}
      onClick={handleClick}
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
