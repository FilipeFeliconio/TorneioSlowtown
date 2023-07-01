import { api } from './axios';

async function signUp(userData) {
  try {
    const response = await api.post('/usuario', userData);
    return response.data;
  } catch (error) {
    console.error('Error during SignUp:', error);
    throw error;
  }
}

export default signUp;
