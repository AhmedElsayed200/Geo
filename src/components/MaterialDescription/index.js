import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { MATERIALS_ENDPOINT } from '../../data/APIs';
import { useParams } from 'react-router-dom';
import MaterialInfo from './material-description';
import Error from '../error';

export function MaterialDescription() {
  const { id } = useParams();
  const [params] = useState({
    scope: 'extended',
    embed: 'tags,contributors',
  });
  const { data, loading, error } = useFetch(
    `${MATERIALS_ENDPOINT}/${id}`,
    params
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return <>{data && <MaterialInfo material={data} />}</>;
}
