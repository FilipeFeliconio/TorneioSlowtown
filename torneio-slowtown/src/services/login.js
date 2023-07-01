import { apiAuth } from "./axios.js";

async function login(email, senha) {
  try {
    const response = await apiAuth.post("/login", {
      email,
      senha,
    });

    
    // Verifica se a resposta tem um token de autenticação
    if (response.data && response.data.token) {
      // Armazena o token no localStorage ou em algum estado global da aplicação
      localStorage.setItem("user", response.data.user.primeiro_nome);
      localStorage.setItem("admin", response.data.user.is_admin);
      localStorage.setItem("token", response.data.token);

      // Retorna os dados do usuário ou qualquer outra informação relevante
      return response.data.user;
    } else {
      throw new Error("Token de autenticação não encontrado na resposta");
    }
  } catch (error) {
    console.error("Erro no login:", error);
    throw error;
  }
}

export default login;
