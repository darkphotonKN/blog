import { postAuth } from '../api/helper';

export const loginUser = async (username, password) => {
  const { data } = await postAuth('/api/login', { username, password });

  return data;
};
