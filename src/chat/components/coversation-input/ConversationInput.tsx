import React from 'react';
import { BaseProps } from '../../types';
import cx from 'classnames';

const ConversationInput: React.FC<BaseProps<any>> = ({ className }) => (
  <div className={cx('p-2 h-12', className)}>
      <input className="w-full rounded-2xl text-sm h-full p-2" type="text" placeholder="Type a message"/>
  </div>
);

export default ConversationInput;
