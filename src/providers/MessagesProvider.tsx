import React, { useCallback, useContext } from 'react';
import { MessageT } from '../chat/types';
import { dummyUserMessages } from '../fixtures-data/userMessages';

const MessagesContext = React.createContext<{
  userMessages: { [id: number]: MessageT[] };
  updateMessages: (id: number, message: MessageT) => void;
}>({
  userMessages: {},
  // getUserMessages: () => {},
  updateMessages: (id, message) => {},
});

export const MessagesProvider: React.FC<{}> = props => {
  const [userMessages, setUserMessages] = React.useState<{ [id: number]: MessageT[] }>(dummyUserMessages);
  const updateMessages = useCallback(
    (id, message) => {
      setUserMessages({ ...userMessages, [id]: [...(userMessages?.[id] || []), message] });
    },
    [setUserMessages, userMessages]
  );
  return <MessagesContext.Provider value={{ userMessages, updateMessages }}>{props.children}</MessagesContext.Provider>;
};

export const useMessages = () => useContext(MessagesContext);
