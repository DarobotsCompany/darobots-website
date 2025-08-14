import styles from './Logo.module.scss';

import Image from 'next/image';

import clsx from 'clsx';

import LogoSrc from '@/../public/logo.svg';

interface LogoProps {
  className?: string;
  withBorder?: boolean;
}

export default function Logo({ className, withBorder }: LogoProps) {
  return (
    <Image
      className={clsx([styles.root, className], withBorder && styles.with_border)}
      alt="Darobots"
      src={LogoSrc}
      width={119}
      height={25}
    />
  );
}
