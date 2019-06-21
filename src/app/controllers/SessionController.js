const { User } = require('../models')

class SessionController {
    async store(req, res) {
        const { email, password } = req.boby

        const user = await User.findOne({ where: { email } })

        if (!user) {
            return res.status(401).json({ message: 'User not found' })
        }

        //ele entra se o password estiver errado
        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ message: 'Incorrect password'})
        }

        return res.json({ user });
    }
}

module.exports = new SessionController();