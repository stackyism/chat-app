import React, { useCallback, useState } from 'react';
import { BaseProps, UserT } from '../../types';
import cx from 'classnames';
import { useMessages } from '../../../providers';

type ConversationInputT = BaseProps<{ currentUser: UserT['id']; conversationUser: UserT['id'] }>;

const ConversationInput: React.FC<ConversationInputT> = ({ className, currentUser, conversationUser }) => {
  const { updateMessages } = useMessages();
  const [value, setValue] = useState<string>('');
  const onEnterMessage = useCallback(() => {
    if(value){
      updateMessages(conversationUser, {
        id: Math.floor(Math.random() * 1000),
        text: value || '',
        userId: currentUser,
      });
      setValue('');
    }
  }, [updateMessages, conversationUser, value, currentUser]);

  const onKeyPress = useCallback(
    (event: React.KeyboardEvent) => {
      switch (event.key) {
        case 'Enter':
          onEnterMessage();
          break;
        default:
          setValue(value);
          break;
      }
    },
    [value, setValue, onEnterMessage]
  );
  return (
    <div className={cx('p-2 h-14 flex justify-center items-center', className)}>
      <input
        className="w-full rounded-3xl text-sm h-full px-4 hover:border-blue-300 border-transparent border focus:border-blue-300"
        type="text"
        placeholder="Type a message"
        //@ts-ignore
        onChange={event => setValue(event.target.value)}
        onKeyPress={onKeyPress}
        value={value}
      />
      <button className="ml-2 text-gray-500 hover:text-gray-900 focus:text-gray-900" onClick={onEnterMessage}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M48 448l416-192L48 64v149.333L346 256 48 298.667z"/>
        </svg>
      </button>
    </div>
  );
};

export default ConversationInput;
