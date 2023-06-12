import React, { useRef, useState } from 'react';
import MaterialCard from './material-card';
import useFetch from '../hooks/useFetch';
import { MATERIALS_ENDPOINT } from '../data/APIs';
import Error from './error';

export function MaterialList() {
  const page = useRef(0);
  const limit = 12;
  const [params, setParams] = useState(() => ({
    type: 'featured',
    embed: 'creator',
    limit,
    offset: page.current * (limit - 1),
  }));

  const { data, loading, error } = useFetch(MATERIALS_ENDPOINT, params);

  const handleBack = () => {
    page.current--;
    setParams((prevParams) => ({
      ...prevParams,
      offset: (page.current + 1) * limit - 1,
    }));
  };

  const handleNext = () => {
    page.current++;
    setParams((prevParams) => ({
      ...prevParams,
      offset: (page.current + 1) * limit - 1,
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <>
      <div className="flex flex-wrap justify-between">
        {data?.map((material) => (
          <div className="w-100 w-50-m w-30-l pa3" key={material.id}>
            <MaterialCard material={material} />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          disabled={page.current === 0}
          onClick={handleBack}
          className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue ba b--dark-blue br3 mr2 pointer"
        >
          &lt; Previous
        </button>
        <button
          disabled={data?.length < limit}
          onClick={handleNext}
          className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue ba b--dark-blue br3 pointer"
        >
          Next &gt;
        </button>
      </div>
    </>
  );
}
