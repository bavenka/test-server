import mongoose from 'mongoose';
import UserSchema from '../shemas/userShema';

const User = mongoose.model('User', UserSchema);

export default User;