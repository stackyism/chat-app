import React from 'react';
import { BaseProps, UserT } from '../../types';
import { Avatar } from '../../../components/avatar';
import cx from 'classnames';

type UserTileT = BaseProps<UserT> & { onClick?: (id: UserT['id']) => void };

const UserTile: React.FC<UserTileT> = ({ name, id, imageUrl, className, onClick }) => (
  <button className={cx('flex py-4 px-2 cursor-pointer', className)} key={id} onClick={() => onClick?.(id)}>
    <Avatar url={imageUrl} size="xl" />
    <div className="ml-4 text-xl text-gray-800 flex flex-col justify-center items-center h-full">{name}</div>
  </button>
);

export default UserTile;
