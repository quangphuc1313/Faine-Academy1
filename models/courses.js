import mongoose from 'mongoose';

const coursesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    thumbnail: {
        type: String,
        default: '',
    },
    userView: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
    }],

    discountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'discount',
    },
    minutes: { type: Number },
    chapter: [{
        title: { type: String },
        video_urls: [{ type: String }],
        index: { type: Number }
    }],
    master: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'master',
    },

    /*services: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'services',
        }
    ],*/

    price: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },
    
    openTime: {
        type: Date,
        required: true,
    },
    
    closeTime: {
        type: Date,
        required: true,
    },
},
    { timestamps: true }
);

export default mongoose.model('courses', coursesSchema);
