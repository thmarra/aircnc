import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: String
});

export default mongoose.model('User', UserSchema);