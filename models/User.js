import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 128,
        },
        email: {
            type: String,
            required: true,
            max: 128,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        city: String,
        state: String,
        country: String,
        occupation: String,
        phoneNumber: String,
        transaction: Array,
        role: {
            type: String,
            enum: ['user', 'admin', 'superadmin'],
            default: 'admin',
        },
    },
    {
        timestamps: true,
    }
);

const user = mongoose.model('User', UserSchema);

export default user;
