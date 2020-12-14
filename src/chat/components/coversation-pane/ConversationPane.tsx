import React from 'react';
import cx from 'classnames';
import { MessageT, UserT } from '../../types';
import { Message } from '../../../components/message';
import './conversation-pane.css';

type ConversationPaneT = { messages: MessageT[]; currentUser: UserT['id']; conversationUser?: UserT['id'] };

const ConversationPane: React.FC<ConversationPaneT> = ({ messages = [], currentUser }) => {
  return (
    <div className="flex-1 flex flex-col overflow-y text-sm conversation-pane overflow-y-auto">
      {messages.map(datum => {
        return (
          <Message
            className={cx('mx-4 mt-2 max-w-md self-start', { 'self-end bg-blue-700': currentUser === datum.userId })}
            key={datum.id}
          >
            {datum.text}
          </Message>
        );
      })}
    </div>
  );
};

export default ConversationPane;
