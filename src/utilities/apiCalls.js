export const API_DOMAIN = 'https://www.giantbomb.com/';

export const API_KEY = '33d0999273638c16cfc2f28d5f466f289e8f28d3'

export const get = async (domain, endpoint) => {
  try {
    const response = await fetch(domain + endpoint);
    return response.json();
  } catch (err) {
    return err.data;
  }
};