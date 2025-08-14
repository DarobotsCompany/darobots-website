'use client';

import styles from './SwitchArrow.module.scss';

import Image from 'next/image';

import clsx from 'clsx';
import { ArrowLeft, ArrowRight, Minus, Plus, X } from 'lucide-react';

import Message from '@/../public/message.svg';
import Message2 from '@/../public/messages-2.svg';
import Settings from '@/../public/setting-2.svg';

interface SwitchArrowProps {
  iconType?: 'leftArrow' | 'rightArrow' | 'plus' | 'minus' | 'x';
  className?: string;
  messageIcon?: boolean;
  messageIconActive?: boolean;
  settingsIcon?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export default function SwitchArrow({
  iconType,
  className,
  messageIcon,
  settingsIcon,
  messageIconActive,
  onClick,
  disabled,
}: SwitchArrowProps) {
  const renderIcon = () => {
    if (messageIcon) {
      return <Image alt="Повідомлення" src={Message} width={30} height={31} />;
    }

    if (messageIconActive) {
      return <Image alt="Повідомлення" src={Message2} width={30} height={31} />;
    }

    if (settingsIcon) {
      return <Image alt="Налаштування" src={Settings} width={30} height={31} />;
    }

    switch (iconType) {
      case 'leftArrow':
        return <ArrowLeft size={16} />;
      case 'rightArrow':
        return <ArrowRight size={16} />;
      case 'plus':
        return <Plus size={16} />;
      case 'minus':
        return <Minus size={16} />;
      case 'x':
        return <X size={16} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={clsx(styles.root, className, disabled && styles.disabled)}
      onClick={onClick}
    >
      {renderIcon()}
    </div>
  );
}
