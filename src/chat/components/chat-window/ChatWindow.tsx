import React from 'react';
import { ConversationPane } from '../coversation-pane';
import { ConversationInput } from '../coversation-input';
import { useMessages, useUsers } from '../../../providers';

const ChatWindow = () => {
  const { userMessages } = useMessages();
  const { currentUser, conversationUser } = useUsers();

  return (
    <div className="flex flex-col h-full p-2">
      <ConversationPane
        messages={userMessages[conversationUser]}
        currentUser={currentUser}
      />
      <ConversationInput currentUser={currentUser} conversationUser={conversationUser} />
    </div>
  );
};

export default ChatWindow;
