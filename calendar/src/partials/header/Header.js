import React from 'react';
import { Link } from 'react-router-dom';


import { logout } from '../../services/userService';

import './header.scss';

export const Header = ({ user, setLoginState }) => {
  const onLogout = () => {
    logout()
      .then(() => setLoginState(false))
      /* eslint no-console: ["error", { allow: ["error"] }] */
      .catch(console.error);
  };

  return (
    <header className="header">
      <Link to="/">Calendar</Link>
      {
        <button
          type="button"
          className="start-button"
          disabled={!user}
          onClick={onLogout}
        >
          Logout
        </button>
      }
    </header>
  );
};
