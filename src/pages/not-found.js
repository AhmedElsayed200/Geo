import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="vh-90 flex items-center justify-center ">
      <div className="pa4 bg-white shadow-5">
        <h1 className="tc f1">404 - Page Not Found</h1>
        <p className="tc f4">The page you are looking for does not exist.</p>
        <div className="tc mt4">
          <Link
            to="/"
            className="f4 no-underline white black bg-blue pa3 ba b--gray br4 hover-bg-dark-blue dib"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
