import styles from './PulseBadge.module.scss';

export default function PulseRing() {
  return (
    <div className={styles.pulse_wrapper}>
      <div className={styles.pulse_ring}></div>
      <div className={styles.pulse_center}></div>
    </div>
  );
}
