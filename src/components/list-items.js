import React from 'react';
import PropTypes from 'prop-types';

export default function ListItems({ items, name }) {
  return items.length === 0 ? (
    <span> No {name} to show</span>
  ) : (
    <ul className="list pl0">
      {items.map((item) => (
        <li key={item} className="dib mr2 mb2 ba b--black pa1 br2">
          {item}
        </li>
      ))}
    </ul>
  );
}

ListItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
};
