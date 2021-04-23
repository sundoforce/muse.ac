import qs from 'qs';
import client from './client';

export const writeEnsemble = ({ title, content, createdAt }) =>
  client.post('/api/ensembles', { title, content, createdAt });

export const readEnsemble = id => client.get(`/api/ensembles/${id}`);

export const listEnsembles = ({ ensemble, id, createdAt }) => {
  const queryString = qs.stringify({
    ensemble,
    id,
    createdAt,
  });
  return client.get(`/api/ensembles?${queryString}`);
};

export const updateEnsemble = ({ id, title, content, createdAt }) =>
  client.patch(`/api/ensembles/${id}`, {
    title,
    content,
    createdAt,
  });

export const removeEnsemble = id => client.delete(`/api/ensembles/${id}`);
