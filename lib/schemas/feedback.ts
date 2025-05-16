import { Schema, Types, models, model } from "mongoose";

const Feedback = new Schema({
    data: {},
    id: Types.ObjectId,
}, {
    timestamps: true,
});

export default models.Feedback || model("Feedback", Feedback);