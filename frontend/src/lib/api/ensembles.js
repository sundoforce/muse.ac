import qs from 'qs';
import client from './client';

export const writePost = ({ title, body, tags }) =>
  client.post('/api/todos', { title, body, tags });

export const readPost = id => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/todos?${queryString}`);
};

export const updatePost = ({ id, title, body, tags }) =>
  client.patch(`/api/todos/${id}`, {
    title,
    body,
    tags,
  });

export const removePost = id => client.delete(`/api/todos/${id}`);
