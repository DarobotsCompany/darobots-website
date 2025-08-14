import styles from './PulseBadge.module.scss';

import PulseRing from '@/components/ui/PulseBadge/PulseRing';

import clsx from 'clsx';

interface PulseBadgeProps {
  label: string;
  type: 'blue' | 'green';
  className?: string;
}

export default function PulseBadge({ label, type, className }: PulseBadgeProps) {
  return (
    <div
      className={clsx([styles.pulse, type === 'blue' && styles.pulse_blue, className])}
    >
      <PulseRing />
      <p>{label}</p>
    </div>
  );
}
