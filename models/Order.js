import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        surName: {
            type: String,
            required: true
        },
        secondName: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Order', OrderSchema);
