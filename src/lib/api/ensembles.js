import qs from 'qs';
import client from './client';

export const writeEnsemble = ({ title, body, tags }) =>
  client.post('/api/ensemble', { title, body, tags });

export const readEnsemble = id => client.get(`/api/ensemble/${id}`);

export const listEnsembles = ({ ensemble, id, tag }) => {
  const queryString = qs.stringify({
    ensemble,
    id,
    tag,
  });
  return client.get(`/api/ensemble?${queryString}`);
};

export const updateEnsemble = ({ id, title, body, tags }) =>
  client.patch(`/api/ensemble/${id}`, {
    title,
    body,
    tags,
  });

export const removeEnsemble = id => client.delete(`/api/ensemble/${id}`);
