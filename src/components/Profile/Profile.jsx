import React from 'react';
import PropTypes from 'prop-types';
import css from './profile.module.scss';

function Profile({ username, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;

  //? Round and Separation of thousandths

  function separation(data) {
    data = Math.round(data);
    let xP = String(data);
    let sP = xP.split('');
    let indexP = xP.length - 1;
    let wP = Math.floor(indexP / 3);
    for (let i = 1; i <= wP; i += 1) {
      indexP = indexP - 1 - i;
      sP.splice(indexP, 0, ' ');
      let rP = sP.join('');
      data = rP;
    }
    return data;
  }

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{separation(followers)}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{separation(views)}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{separation(likes)}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
