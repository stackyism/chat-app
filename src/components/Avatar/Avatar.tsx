import React from 'react';
import { BaseProps } from '../../chat/types';
import cx from 'classnames';

const SIZE_MAP: Record<string, string> = {
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '4rem',
};

const Avatar: React.FC<BaseProps<{ url?: string; size?: string }>> = ({ url, className, size = 'md' }) => {
  const avatarSize = SIZE_MAP[size];
  return (
    <div
      className={cx('items-center justify-center', className)}
      style={{ height: avatarSize, width: avatarSize }}
    >
      <img className="rounded-full h-full w-full object-cover" src={url} alt="User Avatar" />
    </div>
  );
};

export default Avatar;
