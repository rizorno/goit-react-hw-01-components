import React from 'react';
import PropTypes from 'prop-types';
import css from './friend-list.module.scss';
import FriendListItem from './FriendListItem/FriendListItem';

function FriendList({ friends = [] }) {
  const elements = friends.map(element => {
    const { avatar, name, isOnline, id } = element;

    return (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    );
  });

  return <ul className={css['friend-list']}>{elements}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
