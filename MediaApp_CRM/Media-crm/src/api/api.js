import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api', 
});

export const postInquiry = async (data) => {
  try {
    const response = await api.post('/inquiries', data);
    return response.data;
  } catch (error) {
    console.error("Error posting inquiry:", error);
    throw error;
  }
};

export default api;
