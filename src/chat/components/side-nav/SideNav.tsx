import React, { useCallback } from 'react';
import { UserTile } from '../user-tile';
import { useUsers } from '../../../providers';

const SideNav = () => {
  const { users, setConversationUser } = useUsers();
  const onUserClick = useCallback(
    userId => {
      setConversationUser(userId);
    },
    [setConversationUser]
  );
  return (
    <div className="flex flex-col border-r border-gray-300 h-full">
      {users.map(user => (
        <UserTile {...user} className="border-b border-gray-300" onClick={onUserClick} key={user.id} />
      ))}
    </div>
  );
};

export default SideNav;
