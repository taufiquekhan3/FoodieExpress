import express from 'express'

import { addFood, foodlist, removeFood } from '../controllers/foodController.js';

import multer from 'multer'

const foodRouter = express.Router();

// Image Storage Engine

//const storage = multer.diskStorage( {
   // destination:"uploads",
    //filename:(req,file,cb) => {
      //   return cb(null,`${Date.now()}${file.originalname}`)
    //}
//})

//const upload = multer({storage:storage})

foodRouter.post("/add",addFood)
foodRouter.get("/foodlist",foodlist)
foodRouter.post("/removefood",removeFood)


export default foodRouter;