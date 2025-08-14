'use client';

import styles from './Input.module.scss';

import clsx from 'clsx';
import { Pencil } from 'lucide-react';

import { montFont } from '@/fonts';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  divClassName?: string;
  isEdit?: boolean;
  onEditClick?: () => void;
  isNotValid?: boolean;
}

export default function Textarea({
  label,
  divClassName,
  isEdit,
  onEditClick,
  isNotValid,
  ...props
}: TextareaProps) {
  return (
    <div className={clsx([styles.root, montFont.className, divClassName])}>
      {label && <p>{label}</p>}
      <div>
        <textarea {...props} style={isNotValid ? { borderColor: 'red' } : {}} />
        {isEdit && <Pencil size={20} onClick={() => onEditClick?.()} />}
      </div>
    </div>
  );
}
