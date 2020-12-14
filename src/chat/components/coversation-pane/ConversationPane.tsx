import React from 'react';
import cx from 'classnames';
import { MessageT } from '../../types';
import { Message } from '../../../components/message';
import './conversation-pane.css';

const data: MessageT[] = [
  { id: 2, userId: 2, text: 'Hello' },
  { id: 1, userId: 1, text: 'Hello' },
];
const currentUser = 1;

const ConversationPane = () => (
  <div className="flex-1 flex flex-col justify-end">
    {data.map(datum => {
      return (
        <Message className={cx('m-4 max-w-md self-start', { 'self-end': currentUser === datum.id })}>
          {datum.text}
        </Message>
      );
    })}
  </div>
);

export default ConversationPane;
