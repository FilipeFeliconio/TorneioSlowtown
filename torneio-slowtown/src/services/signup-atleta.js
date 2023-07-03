import { apiBack } from "./axios";

async function signUpAtleta(atletaData) {
  try {
    const response = await apiBack.post("/atleta", atletaData);
    return response.data;
  } catch (error) {
    console.error("Error during SignUp:", error);
    throw error;
  }
}

export default signUpAtleta
