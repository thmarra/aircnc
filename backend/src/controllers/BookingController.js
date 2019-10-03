import Spot from '../models/Spot';
import User from '../models/User';
import Booking from '../models/Booking';

export default {
    // async index(req, res) {
    //     const { tech } = req.query;
    //     const spots = await Spot.find({ techs: tech });

    //     return res.json(spots)
    // },
    async store(req, res) {
        const { spotID } = req.params;
        const { date } = req.body;
        const userID = req.headers['user-id'];

        const user = await User.findById(userID);
        if (!user) {
            return res.status(400).json({ error: 'User doesn\'t exists' });
        }

        const spot = await Spot.findById(spotID);
        if (!spot) {
            return res.status(400).json({ error: 'Spot doesn\'t exists' });
        }

        const booking = await Booking.create({
            user: userID,
            spot: spotID,
            date
        });

        await booking.populate('spot').populate('user').execPopulate();

        return res.json(booking);
    }
}