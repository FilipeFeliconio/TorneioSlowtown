const request = require("supertest");
const app = require("../../app");
const TOKEN = process.env.TOKEN_TEST || "";

describe("Testes para o path 'atleta'", () => {
    test("[POST /atleta] Cadastro de atleta A", async () => {
        const res = await request(app)
                            .post("/atleta")
                            .send({
                                "primeiro_nome": "Atleta1",
                                "ultimo_nome": "Sobrenome1",
                                "cpf": "300.200.300-37",
                                "peso": 71.0,
                                "categoria": "Leve",
                                "patrocinador": "Academia XYX"
                              })
                            .set('Authorization', `Bearer ${TOKEN}`)
                            .set("Content-Type", "application/json")
                            .set('Accept', 'application/json');

        // Espera que o código HTTP seja 201
        expect(res.statusCode).toBe(201);
    });

    test("[POST /atleta] Cadastro de atleta B", async () => {
        const res = await request(app)
                            .post("/atleta")
                            .send({
                                "primeiro_nome": "Atleta2",
                                "ultimo_nome": "Sobrenome2",
                                "cpf": "300.200.300-35",
                                "peso": 72.0,
                                "categoria": "Leve",
                                "patrocinador": "Academia XYX"
                              })
                            .set('Authorization', `Bearer ${TOKEN}`)
                            .set("Content-Type", "application/json")
                            .set('Accept', 'application/json');

        // Espera que o código HTTP seja 201
        expect(res.statusCode).toBe(201);
    });

    test("[GET /atleta] Recupera todos os atletas", async () => {
        const res = await request(app)
            .get("/atleta")
            .set('Authorization', `Bearer ${TOKEN}`)
            .set("Content-Type", "application/json")
            .set('Accept', 'application/json');
        expect(res.statusCode).toBe(200);
    });

    test("[GET /atleta/{id}] Recupera um atleta por id", async () => {
        const res = await request(app)
            .get("/atleta/1")
            .set('Authorization', `Bearer ${TOKEN}`)
            .set('Accept', 'application/json');
  
        // Espera que o código HTTP seja 200
        expect(res.statusCode).toBe(200);
    });
});
