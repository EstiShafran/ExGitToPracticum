import  express  from "express";
import * as userControler from "../controlers/user.js"
const router=express.Router();
router.get("/:id",userControler.getUserById );



router.delete("/:id",userControler.deleteUserById)


router.post("/",userControler.addUser)


router.put("/:id",userControler.updateUserById)



export default router;
