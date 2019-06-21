// esse middleware vai verificar se o token está presente dentro da requisição
// um middleware geralmente é um req. res e next que é a estrutura padrão do express

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Token not provided" });
    }

    const [, token] = authHeader.split('');

    try {
        // se ele conseguiu decodificar esse token se ele é valido
        const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET);

        req.userId = decoded.id;

        return next()
    } catch (err) {
        return res.status(401).json({ message: "Token not provided" });
    }

};