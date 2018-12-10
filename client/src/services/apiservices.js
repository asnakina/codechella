const axios = require('axios');
const BASE_URL = 'http://localhost:3001';

 const getAreas = async () => {
  const areas = await axios.get(`${BASE_URL}/areas`);
  return areas.data;
}

 const getArea = async (id) => {
  const area = await axios.get(`${BASE_URL}/areas/${id}`);
  return area.data;
}

 const getArtists = async () => {
  const artists = await axios.get(`${BASE_URL}/artists`);
  return artists.data;
}

 const getArtist = async (id) => {
  const artist = await axios.get(`${BASE_URL}/artists/${id}`);
  return artist.data;
}

 const updateArtist = async (data, id) => {
  const artists = await axios.put(`${BASE_URL}/artists/${id}`, data);
  return artists.data;
}

 const postArtist = async (data) => {
  const artist = await axios.post(`${BASE_URL}/artists`,data);
  return artist.data;
}

 const removeArtist = async (id) => {
  const artist = await axios.delete(`${BASE_URL}/artists/${id}`);
  return artist.data;
}

 const getVendors = async () => {
  const vendors = await axios.get(`${BASE_URL}/vendors`);
  return vendors.data;
}

 const getVendor = async (id) => {
  const vendor = await axios.get(`${BASE_URL}/vendors/${id}`);
  return vendor.data;
}

 const updateVendor = async (data, id) => {
  const vendor = await axios.put(`${BASE_URL}/vendors/${id}`, data);
  return vendor.data;
}

 const postVendor = async (data) => {
  const vendor = await axios.post(`${BASE_URL}/vendors`, data);
  return vendor.data;
}

 const removeVendor = async (id) => {
  const vendor = await axios.delete(`${BASE_URL}/vendors/${id}`);
  return vendor.data;
}

export default {
  getAreas,
  getArea,
  getArtists,
  getArtist,
  updateArtist,
  postArtist,
  removeArtist,
  getVendors,
  getVendor,
  updateVendor,
  postVendor,
  removeVendor
}
