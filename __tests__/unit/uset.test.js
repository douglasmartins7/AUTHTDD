/* Testa as funções puras
    Dados as mesmas variaveis, não importa o número de vezes elas tem sempre o mesmo
    retorno. Elas geralmente nunca tocam em efeitos colaterais, por exemplo chamadas a API,
    cadastro no banco de dados, elas nunca tocam em recursos que podem dar errado, apenas em recursos da propria
    linguagem, como calculos matematicos ou geradores de caminhos
*/

const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
    beforeEach(async () => {
        await truncate();
    })

    it('should encrypt user password', async () => {
        const user = await User.create({
            name: "Diego",
            email: "diego@rocketseat.com.br",
            password: "123456"
        });

        const compareHash = await bcrypt.compare("123456", user.password_hash);

        expect(compareHash).toBe(true);
    });
});