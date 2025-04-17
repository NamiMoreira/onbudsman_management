import { Router } from "express";
const router = Router();
import multer from "multer";

import { CreateUserController } from "./controlers/user/CreateUserController";


import { CreateOcurrenceController } from "./controlers/occurrence/CreateOcurrenceController";
import { UploadFileController } from "./controlers/upload/UploadFileController";

import uploadConfig from "./config/multer";
const upload = multer(uploadConfig.upload("./tmp"));


router.post("/Ocurrence",new CreateOcurrenceController().handle);

router.post("/file", upload.single("file"), new UploadFileController().handle);

export { router };
