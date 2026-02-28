import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    monthlyPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    annuallyPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    features: [{
        type: String,
    }],
    icon: {
        type: String,
    },
    isPopular: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

const Service = mongoose.model("Service", serviceSchema);

export default Service;
