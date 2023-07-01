import { apiBackWithToken } from './axios';

async function listCompetitors() {
  try {
    const response = await apiBackWithToken.get('/atleta')
    .then(function (response) {
      return response.data
    })
    return response;
  } catch (error) {
    console.error('Error while listing competitors:', error);
    throw error;
  }
}

export default listCompetitors;
