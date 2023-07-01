import { api } from './axios';

async function listCompetitors() {
  try {
    const response = await api.get('/atleta');
    return response;
  } catch (error) {
    console.error('Error while listing competitors:', error);
    throw error;
  }
}

export default listCompetitors;
