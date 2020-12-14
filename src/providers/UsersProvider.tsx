import React, { createContext, useContext, useState } from 'react';
import { UserT } from '../chat/types';
import { dummyUsers } from '../fixtures-data/users';

const UsersContext = createContext<{
  users: UserT[];
  currentUser: number;
  conversationUser: number;
  setConversationUser: (id: number) => void;
}>({
  users: [],
  currentUser: 1,
  conversationUser: 1,
  setConversationUser: id => {},
});

export const UsersProvider: React.FC<{}> = props => {
  const [users, setUsers] = useState(dummyUsers);
  const [currentUser, setCurrentUser] = useState<number>(1);
  const [conversationUser, setConversationUser] = useState<number>(1);

  return (
    <UsersContext.Provider value={{ users, currentUser, conversationUser, setConversationUser }}>
      {props.children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
