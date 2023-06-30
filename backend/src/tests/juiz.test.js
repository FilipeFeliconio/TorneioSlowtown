const request = require("supertest");
const app = require("../../app");
const TOKEN = process.env.TOKEN_TEST || "";

describe("Testes para o path 'juiz'", () => {
    test("[POST /juiz] Cadastro de juiz", async () => {
        const res = await request(app)
                            .post("/juiz")
                            .send({
                                "nome": "Nome Juiz"
                              })
                            .set('Authorization', `Bearer ${TOKEN}`)
                            .set("Content-Type", "application/json")
                            .set('Accept', 'application/json');

        // Espera que o código HTTP seja 201
        expect(res.statusCode).toBe(201);
    });

    test("[GET /juiz] Recupera todos os juizes", async () => {
        const res = await request(app)
            .get("/juiz")
            .set('Authorization', `Bearer ${TOKEN}`)
            .set("Content-Type", "application/json")
            .set('Accept', 'application/json');
        expect(res.statusCode).toBe(200);
    });

    test("[GET /juiz/{id}] Recupera um juiz por id", async () => {
        const res = await request(app)
            .get("/juiz/1")
            .set('Authorization', `Bearer ${TOKEN}`)
            .set('Accept', 'application/json');
  
        // Espera que o código HTTP seja 200
        expect(res.statusCode).toBe(200);
    });
});
