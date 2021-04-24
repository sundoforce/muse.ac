import qs from 'qs';
import client from './client';

export const readEnsemble = id => client.get(`/api/ensembles/${id.id}`);

export const listEnsembles = ({ ensemble, id, createdAt }) => {
  const queryString = qs.stringify({
    ensemble,
    id,
    createdAt,
  });
  return client.get(`/api/ensembles?${queryString}`);
};

