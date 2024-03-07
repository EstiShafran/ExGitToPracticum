import mongoose from "mongoose";
import joi from "joi";

const userSchema = mongoose.Schema({
    email: String,
    userName: String,
    phone: String
})
export const userModel = mongoose.model("user", userSchema);

export const userValidatorForAdd = (_user) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        userName: joi.string().min(3).max(30).required(),
        phone: Joi.string().pattern(/^[0-9]{10}$/).required()    });
    return schema.validate(_user);
}
export const userValidatorForUpdate = (_user) => {
    const schema = joi.object({
        email: joi.string().email(),
        userName: joi.string().min(3).max(30),
        phone: Joi.string().pattern(/^[0-9]{10}$/) });
    return schema.validate(_user);
}
