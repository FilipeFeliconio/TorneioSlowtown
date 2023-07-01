import { apiBackWithToken } from "./axios";

async function signUpRefereeService(userDataReferee) {
  try {
    const response = await apiBackWithToken.post("/juiz", userDataReferee);
    return response.data;
  } catch (error) {
    console.error("Error during SignUp:", error);
    throw error;
  }
}

export default signUpRefereeService
