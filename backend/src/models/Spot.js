import mongoose from 'mongoose'

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        // Usuário que criou o Spot
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Model
    }
});

export default mongoose.model('Spot', SpotSchema);