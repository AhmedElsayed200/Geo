import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { dateToString } from '../utils/pure-functions';

const MaterialCard = ({ material }) => {
  const { id, thumbUrl, title, type, date_created, creator } = material;

  return (
    <div className="w-100 w-100-m w-45-l h-100 grow dib f3-ns">
      <Link to={`/details/${id}`} className="color-inherit link">
        <div className="ba bw1 br3 b--black-20 pa3 vh-50">
          <div className="w-100 h-50 flex justify-center">
            <img src={thumbUrl} alt="Thumbnail of resource" className="h-100" />
          </div>
          <div className="flex flex-column justify-around h-50">
            <h3 className="f5 mt3 mb2">{title}</h3>
            <div className="f6 mb2">
              {type === 'book' ? 'Book' : 'Worksheet'} by {creator?.displayname}
            </div>
            <div className="f6">Created on {dateToString(date_created)}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

MaterialCard.propTypes = {
  material: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbUrl: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date_created: PropTypes.number.isRequired,
    creator: PropTypes.shape({
      displayname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MaterialCard;
