
import mongoose from "mongoose";
import { userModel, userValidatorForAdd } from "../models/user.js";
const getUserById = async (req, res) => {
try {
       
        let userx = await userModel.findById(req.params.userid);
        if (!userx)
            return res.status(404).send("No user was found with such id")
        res.json(userx);
    }
    catch (err) {
        res.status(400).send("A timeout occurred while retrieving the data" + err.message);
    }

}

const addUser = async (req, res) => {

    let { userName,email,phone } = req.body;
    let validate = userValidatorForAdd(req.body);
    if (validate.error)
    return res.status(404).send("The data you sent is invalid, try again" + validate.error.details[0].message); 
    try{
        if (!mongoose.isValidObjectId(id))
        return res.status(400).send("Invalid code");
        if (!userName || !email)
            return res.status(400).send("Name and email are mandatory fields");

        let sameUser = await userModel.find({ userName, email });
        if (sameUser.length > 0)
            return res.status(409).send("Such a user already exists")

        let newUser = await userModel.create({ userName,email,phone });


        return res.json(newUser);

    }
    catch (err) {
        res.status(400).send("A timeout occurred while add the data" + err.message);

    }

}

const updateUserById = async (req, res) => {

    let { id } = req.params;
    let validate = userValidatorForUpdate(req.body)
    if(validate,console.error)
    return res.status(400).send("The "+validate.error.details[0].message);
      try {
        if(!mongoose.isValidObjectId)
        return res.status(400).send("Invalid code");
        let userToUpdate = await userModel.findById(id);
        if (!userToUpdate)
            return res.status(404).send("No user was found with such a code for update")
        await userModel.findByIdAndUpdate(id, req.body);
        let user = await userModel.findById(id);

        res.json(user);
    }
    catch (err) {
        res.status(400).send("A timeout occurred while delete the data" + err.message);
    }
}
const deleteUserById = async (req, res) => {
    let { id } = req.params;
    try {
        let userx = await userModel.findByIdAndDelete(id);
        if (!userx)
            return res.status(404).send("No user was found with such a id for delete")
        res.json(userx);
    }
    catch (err) {
        res.status(400).send("A timeout occurred while delete the data" + err.message);
    }
}



export {getUserById, updateUserById,addUser,deleteUserById};