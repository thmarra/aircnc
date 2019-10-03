import Spot from '../models/Spot';

export default {
    async show(req, res) {
        const userID = req.headers['user-id'];
        const spots = await Spot.find({ user: userID });

        return res.json(spots);
    }
}