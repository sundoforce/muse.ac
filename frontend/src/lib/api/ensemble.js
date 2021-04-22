import qs from 'qs';
import client from './client';

export const writePost = ({ title, body, tags }) =>
  client.post('/api/ensembles', { title, body, tags });

export const readPost = id => client.get(`/api/ensembles/${id}`);

export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/ensembles?${queryString}`);
};

export const updatePost = ({ id, title, body, tags }) =>
  client.patch(`/api/ensembles/${id}`, {
    title,
    body,
    tags,
  });

export const removePost = id => client.delete(`/api/ensembles/${id}`);
