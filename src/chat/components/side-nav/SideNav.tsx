import React from 'react';
import { UserT } from '../../types';
import { UserTile } from '../user-tile';

const users: UserT[] = [
  { id: 1, name: 'Me', imageUrl: 'http://stakhi.in:3000/media/saagar_guitar.jpg' },
  {
    id: 2,
    name: 'Jimmy Page',
    imageUrl:
      'https://guitar.com/wp-content/uploads/2020/05/Jimmy-Page-Hero-Credit-Michael-Ochs-Archives-Getty-Images@2560x1707.jpg',
  },
  {
    id: 3,
    name: 'Slash',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTw41rTM4NF5mdpIdE8LtlvTLNgakirkjC4gg&usqp=CAU',
  },
];
const SideNav = () => (
  <div className="flex flex-col border-r border-gray-300 h-full">
    {users.map(user => (
      <UserTile {...user} className="border-b border-gray-300" />
    ))}
  </div>
);

export default SideNav;
