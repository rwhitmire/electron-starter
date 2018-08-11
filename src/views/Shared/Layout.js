// @flow

import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: any
};

const Layout = (props: Props) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <hr />

      {props.children}
    </div>
  );
};

export default Layout;
