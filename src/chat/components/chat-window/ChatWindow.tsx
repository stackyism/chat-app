import React from 'react';
import { ConversationPane } from '../coversation-pane';
import { ConversationInput } from '../coversation-input';

const ChatWindow = () => (
  <div className="flex flex-col h-full p-2">
    <ConversationPane />
    <ConversationInput />
  </div>
);

export default ChatWindow;
