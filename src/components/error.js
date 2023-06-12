import React from 'react';
import PropTypes from 'prop-types';

export default function Error(props) {
  const { message } = props;
  return (
    <div className="flex flex-column items-center justify-center vh-90">
      <h2 className="f2 mb4">Oops, an error occurred!</h2>
      <p className="f4 mb4">{message}</p>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
