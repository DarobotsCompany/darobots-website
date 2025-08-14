import styles from './RoleBadge.module.scss';

import clsx from 'clsx';

import { ibmPlexFont } from '@/fonts';

interface RoleBadgeProps {
  label: string;
}

export default function RoleBadge({ label }: RoleBadgeProps) {
  return (
    <span
      className={clsx([
        styles.root,
        label === 'founder' && styles.active,
        ibmPlexFont.className,
      ])}
    >
      {label.toUpperCase()}
    </span>
  );
}
