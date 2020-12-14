import React, { useState } from 'react';
import { BaseProps, UserT } from '../../types';
import cx from 'classnames';
import { useMessages } from '../../../providers';

type ConversationInputT = BaseProps<{ currentUser: UserT['id']; conversationUser: UserT['id'] }>;

const ConversationInput: React.FC<ConversationInputT> = ({ className, currentUser, conversationUser }) => {
  const { updateMessages } = useMessages();
  const [value, setValue] = useState<string>('');
  const onKeyPress = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Enter':
        updateMessages(conversationUser, {
          id: Math.floor(Math.random() * 1000),
          text: value || '',
          userId: currentUser,
        });
        setValue('');
        break;
      default:
        setValue(value);
        break;
    }
  };
  return (
    <div className={cx('p-2 h-12', className)}>
      <input
        className="w-full rounded-2xl text-sm h-full p-2"
        type="text"
        placeholder="Type a message"
        //@ts-ignore
        onChange={event => setValue(event.target.value)}
        onKeyPress={onKeyPress}
        value={value}
      />
    </div>
  );
};

export default ConversationInput;
