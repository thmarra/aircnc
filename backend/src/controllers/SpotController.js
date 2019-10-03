import Spot from '../models/Spot';
import User from '../models/User';

export default {
    async index(req, res) {
        const { tech } = req.query;
        const spots = await Spot.find({ techs: tech });

        return res.json(spots)
    },
    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const userID = req.headers['user-id'];

        const user = await User.findById(userID);

        if (!user) {
            return res.status(400).json({ error: 'User doesn\'t exists' })
        }

        const spot = await Spot.create({
            user: userID,
            thumbnail: filename,
            techs: techs.split(',').map(tech => tech.trim()),
            company,
            price
        })

        return res.json(spot)
    }
}