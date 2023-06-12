import React from 'react';
import PropTypes from 'prop-types';
import { dateToString, parseContent } from '../../utils/pure-functions';
import ListItems from '../list-items';

const MaterialInfo = ({ material }) => {
  const {
    title,
    thumbUrl,
    type,
    creator,
    date_created,
    contributors,
    description,
    tags,
    topics,
    categories,
  } = material;

  return (
    <div className="flex flex-wrap">
      <div className="w-100 w-60-l ph3 bw1 ba b--black-20 pa1 br2 flex justify-center">
        <img
          src={thumbUrl}
          alt={`Thumbnail of resource ${title}`}
          className="w-100"
        />
      </div>
      <div className="w-100 w-40-l ph3 vh-75-l overflow-auto">
        <h3 className="f4 mt2 mb3">{title}</h3>
        <div className="mb2">
          <strong>Type:</strong> {type === 'book' ? 'Book' : 'Worksheet'}
        </div>
        <div className="mb2">
          <strong>Author:</strong> {creator?.displayname}
        </div>
        <div className="mb2">
          <strong>Date Created:</strong> {dateToString(date_created)}
        </div>
        <div className="mb2">
          <strong>Contributors:</strong>
          <ListItems
            items={contributors?.map((contributor) => contributor.displayname)}
            name="contributors"
          />
        </div>
        <div className="mb2">
          <strong>Description:</strong>{' '}
          {description === '' && <span>No description to show</span>}{' '}
          {parseContent(description)}
        </div>
        <div className="mb2">
          <strong>Tags:</strong>
          <ListItems items={tags} name="tags" />
        </div>
        <div className="mb2">
          <strong>Topics:</strong>
          <ListItems items={topics} name="topics" />
        </div>
        <div className="mb2">
          <strong>Categories:</strong>
          <ListItems items={categories} name="categories" />
        </div>
      </div>
    </div>
  );
};

MaterialInfo.propTypes = {
  material: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbUrl: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    creator: PropTypes.shape({
      displayname: PropTypes.string.isRequired,
    }).isRequired,
    date_created: PropTypes.number.isRequired,
    contributors: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        displayname: PropTypes.string.isRequired,
      })
    ),
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    topics: PropTypes.arrayOf(PropTypes.string),
    categories: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default MaterialInfo;
