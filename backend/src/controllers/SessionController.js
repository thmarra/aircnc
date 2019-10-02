import User from '../models/User';

// index, show, store, update, destroy

/**
 * req.query = acessar query params (filtros, get)
 * req.params = acessar route params (post, put, delete...)
 * req.body = acessar corpo da requisicao (post, put...)
 */

export default {
    // async tá aqui por causa do await
    async store(req, res) {
        const { email } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ email });
        }
        // await: espera o user.create retornar o resultado
        return res.json(user)
    }
};