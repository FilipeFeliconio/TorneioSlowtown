import { apiAuth } from "./axios";

async function signUpAdminService(userData) {
  try {
    const response = await apiAuth.post("/usuario", userData);
    return response.data;
  } catch (error) {
    console.error("Error during SignUp:", error);
    throw error;
  }
}

export default signUpAdminService
