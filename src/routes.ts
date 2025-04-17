import { Router } from "express";
const router = Router();
import multer from "multer";


import { CreateOcurrenceController } from "./controlers/occurrence/CreateOcurrenceController";
import { UploadFileController } from "./controlers/upload/UploadFileController";
import {GetByProtocolController} from"./controlers/occurrence/GetByProtocolController"
import uploadConfig from "./config/multer";
const upload = multer(uploadConfig.upload("./tmp"));

router.get("/Ocurrence/:protocol", new GetByProtocolController().handle)

router.post("/Ocurrence",new CreateOcurrenceController().handle);

router.post("/file", upload.single("file"), new UploadFileController().handle);


export { router };
