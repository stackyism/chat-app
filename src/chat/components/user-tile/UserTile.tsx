import React from 'react';
import { BaseProps, UserT } from '../../types';
import { Avatar } from '../../../components/avatar';
import cx from 'classnames';

type UserTileT = BaseProps<UserT> & { onClick?: (id: UserT['id']) => void; active?: boolean };

const UserTile: React.FC<UserTileT> = ({ name, id, imageUrl, className, active, onClick }) => (
  <button
    className={cx('flex py-4 px-2 cursor-pointer text-gray-800 hover:bg-gray-400 focus:bg-gray-400', className, { 'bg-gray-400': active })}
    key={id}
    onClick={() => onClick?.(id)}
  >
    <Avatar url={imageUrl} size="xl" />
    <div className="ml-4 text-xl flex flex-col justify-center items-center h-full">{name}</div>
  </button>
);

export default UserTile;
