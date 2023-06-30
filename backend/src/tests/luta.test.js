const request = require("supertest");
const app = require("../../app");
const TOKEN = process.env.TOKEN_TEST || "";

describe("Testes para o path 'luta'", () => {
    test("[POST /luta] Cadastro de luta", async () => {
        const res = await request(app)
                            .post("/luta")
                            .send({
                                "data": "2023-07-01",
                                "id_atleta_a": 1,
                                "id_atleta_b": 2,
                                "juiz_id": 1,
                                "etapa_id": 1
                              })
                            .set('Authorization', `Bearer ${TOKEN}`)
                            .set("Content-Type", "application/json")
                            .set('Accept', 'application/json');

        // Espera que o código HTTP seja 201
        expect(res.statusCode).toBe(201);
    });

    test("[GET /luta] Recupera todas as lutas", async () => {
        const res = await request(app)
            .get("/luta")
            .set('Authorization', `Bearer ${TOKEN}`)
            .set("Content-Type", "application/json")
            .set('Accept', 'application/json');
        expect(res.statusCode).toBe(200);
    });

    test("[GET /luta/{id}] Recupera uma luta por id", async () => {
        const res = await request(app)
            .get("/luta/1")
            .set('Authorization', `Bearer ${TOKEN}`)
            .set('Accept', 'application/json');
  
        // Espera que o código HTTP seja 200
        expect(res.statusCode).toBe(200);
    });
});
