import React from 'react';

import { Header } from './Header';
import './page.css';

export const HomePage = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

    <section>
      <h2>Home Page</h2>
      <p>This is a home page</p>
    </section>
  </article>
);
