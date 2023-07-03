import { apiBackWithToken } from "./axios";

async function listReferees() {
  try {
    const response = await apiBackWithToken
      .get("/juiz")
      .then(function (response) {
        return response;
      });
    return response;
  } catch (error) {
    console.error("Error while listing competitors:", error);
    throw error;
  }
}

export default listReferees;
