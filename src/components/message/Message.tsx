import React from 'react';
import { BaseProps } from '../../chat/types';
import cx from 'classnames';
import './message.css';

const Message: React.FC<BaseProps<any>> = ({ children, className }) => (
  <div className={cx('px-4 py-2 message max-w-xl overflow-hidden bg-gray-600 text-gray-50', className)}>{children}</div>
);

export default Message;
