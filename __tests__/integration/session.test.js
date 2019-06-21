/*
    Testam funcionalidades que podem fazer chamadas a API, cadastro no banco de dados, funções que não são puras elas
    possuem efeitos colaterais.


    describe("Authentication", () => {
        it("should sum two numbers", () => {
            const x = 2;
            const y = 4;

            const sum = x + y;

            expect(sum).toBe(7);
        });
    });
   

    expected 7
    received 6

    O usuario estava esperando 7 mais recebeu o valor 6
    ele vai falar onde nosso teste está falhando.

*/

/*
    beforeAll() executa automaticamente antes de todos os testes de sessions, de todos os testes desse arquivo
    beforeEach() executa automaticamentente antes de cada teste, cada it
    afterEach executa depois de cada teste it
    afterAll executa automaticamente uma vez depois de todos os testes
*/

const request = require('supertest');

const app = require("../../src/app");
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe("Authentication", () => {
    beforeEach( async () => {
        await truncate()
    })

    it('should authenticate with valid credentials', async () => {
        const user = await User.create({ 
            name: 'Diego', 
            email: "diego@rocketseat.com.br", 
            password: "123123" 
        });
        
        const response = await request(app)
            .post("/sessions")
            .send({
                email: user.email,
                password: "123123"
            });
        expect(response.status).toBe(200);
    });

    it('should not authenticate with invalid credentials', async () => {
        const user = await User.create({ 
            name: 'Diego', 
            email: "diego@rocketseat.com.br", 
            password: "123123" 
        });
        
        const response = await request(app)
            .post("/sessions")
            .send({
                email: user.email,
                password: "123456"
            });
        expect(response.status).toBe(401);
    });

    it("should return jwt token when authenticated", async () => {
        const user = await User.create({ 
            name: 'Diego', 
            email: "diego@rocketseat.com.br", 
            password: "123123" 
        });
        
        const response = await request(app)
            .post("/sessions")
            .send({
                email: user.email,
                password: "123456"
            });

        expect(response.body).toHaveProperty("token");
    });
});
