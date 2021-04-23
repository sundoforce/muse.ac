import qs from 'qs';
import client from './client';

export const writeTutors = ({ title, body, tags }) =>
  client.post('/api/tutors', { title, body, tags });

export const readTutors = id => client.get(`/api/tutors/${id}`);

export const listTutors = ({ tutors, id, tag }) => {
  const queryString = qs.stringify({
    tutors,
    id,
    tag,
  });
  return client.get(`/api/tutors?${queryString}`);
};

export const updateTutors = ({ id, title, body, tags }) =>
  client.patch(`/api/tutors/${id}`, {
    title,
    body,
    tags,
  });

export const removeTutors = id => client.delete(`/api/tutors/${id}`);
