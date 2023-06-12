import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../data/APIs';
import { prepareMaterial } from '../utils/pure-functions';

/**
 * Performs a GET request to the GeoGebra API.
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
export default function useFetch(endpoint, params) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/${endpoint}`, {
          params: params,
        });

        const preparedData = Array.isArray(response.data)
          ? response.data.map(prepareMaterial)
          : prepareMaterial(response.data);

        setData(preparedData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, params]);

  return { data, loading, error };
}
