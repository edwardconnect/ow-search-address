import apiClient from './api-client';

const apiKey = 'd2CFjHGLvUyAn7ZhPpR9eQ30092';
const apiKeyparams = `?api-key=${apiKey}`

export const searchAddressByPostCode = (postCode: string) => {
  return apiClient.get('/find/' + postCode.replace(/\s/g, '') + apiKeyparams + '&expand=true');
};
