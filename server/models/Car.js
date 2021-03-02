import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Car = new Schema(
    {
        make: { type: String, required: true },
        model: { type: String, required: true },
        color: { type: String, required: true, default: 'Too ugly to tell' },
        year: { type: Number, required: true },
        price: { type: Number, required: true },
        description: { type: String },
        imgUrl: { type: String, required: true, default: 'http://placehold.it/200x200' }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Car;
