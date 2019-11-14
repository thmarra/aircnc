import mongoose from 'mongoose'
import path from 'path'


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
}, {
    toJSON: {
        virtuals: true
    }
});

SpotSchema.virtual('thumbnail_url').get(function() {
    return path.join(process.env.APP_URL, 'files', this.thumbnail)
})

export default mongoose.model('Spot', SpotSchema);