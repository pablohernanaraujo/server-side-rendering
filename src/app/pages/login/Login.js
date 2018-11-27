import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render () {
    return (
      <div>
        <h2>
          LOGIN PAGE with ssr
        </h2>

        <Link to='/home'>
          HOME
        </Link>
        <Link to='/blog'>
          BLOG
        </Link>
      </div>
    );
  }
}

export default Login;
