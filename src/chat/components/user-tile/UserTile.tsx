import React from 'react';
import { BaseProps, UserT } from '../../types';
import { Avatar } from '../../../components/Avatar';
import cx from 'classnames';

const UserTile: React.FC<BaseProps<UserT>> = ({ name, id, imageUrl, className }) => (
  <div className={cx('flex py-4 px-2 cursor-pointer', className)} key={id}>
    <Avatar url={imageUrl} size="xl" />
    <div className="ml-4 text-xl text-gray-800 flex flex-col justify-center items-center">{name}</div>
  </div>
);

export default UserTile;
