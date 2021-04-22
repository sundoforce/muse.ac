import qs from 'qs';
import client from './client';

export const writeEnsemble = ({ title, body, tags }) =>
  client.post('/api/ensembles', { title, body, tags });

export const readEnsemble = id => client.get(`/api/ensembles/${id}`);

export const listEnsembles = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/ensembles?${queryString}`);
};

export const updateEnsemble = ({ id, title, body, tags }) =>
  client.patch(`/api/ensembles/${id}`, {
    title,
    body,
    tags,
  });

export const removeEnsemble = id => client.delete(`/api/ensembles/${id}`);