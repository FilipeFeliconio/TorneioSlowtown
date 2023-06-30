const request = require("supertest");
const app = require("../../app");
const TOKEN = process.env.TOKEN_TEST || "";

describe("Testes para o path 'etapa'", () => {
    test("[POST /etapa] Cadastro de etapa", async () => {
        const res = await request(app)
                            .post("/etapa")
                            .send({
                                "nome": "Final"
                              })
                            .set('Authorization', `Bearer ${TOKEN}`)
                            .set("Content-Type", "application/json")
                            .set('Accept', 'application/json');

        // Espera que o código HTTP seja 201
        expect(res.statusCode).toBe(201);
    });

    test("[GET /etapa] Recupera todos as etapas", async () => {
        const res = await request(app)
            .get("/etapa")
            .set('Authorization', `Bearer ${TOKEN}`)
            .set("Content-Type", "application/json")
            .set('Accept', 'application/json');
        expect(res.statusCode).toBe(200);
    });

    test("[GET /etapa/{id}] Recupera etapa por id", async () => {
        const res = await request(app)
            .get("/etapa/1")
            .set('Authorization', `Bearer ${TOKEN}`)
            .set('Accept', 'application/json');
  
        // Espera que o código HTTP seja 200
        expect(res.statusCode).toBe(200);
    });
});
