'use client';

import styles from './Input.module.scss';

import { useState } from 'react';

import clsx from 'clsx';
import { Eye, EyeOff, Pencil } from 'lucide-react';

import { montFont } from '@/fonts';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  divClassName?: string;
  isEdit?: boolean;
  onEditClick?: () => void;
  isNotValid?: boolean;
}

export default function Input({
  label,
  divClassName,
  isEdit,
  onEditClick,
  isNotValid,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState<'text' | 'password'>('password');

  return (
    <div
      className={clsx([styles.root, montFont.className, divClassName])}
      style={isNotValid ? { borderColor: 'red' } : {}}
    >
      {label && (
        <p>
          {label} {props.required && <b>*</b>}
        </p>
      )}
      <div>
        <input
          {...props}
          type={props.type === 'password' ? showPassword : props.type}
          style={isNotValid ? { borderColor: 'red' } : {}}
        />
        {props.type === 'password' &&
          (showPassword === 'password' ? (
            <EyeOff
              className={clsx([props.value === '' && styles.disabled])}
              onClick={() => setShowPassword('text')}
              size={20}
            />
          ) : (
            <Eye onClick={() => setShowPassword('password')} size={20} />
          ))}
        {isEdit && <Pencil size={20} onClick={() => onEditClick?.()} />}
      </div>
    </div>
  );
}
