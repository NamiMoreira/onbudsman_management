import { error } from "console";
import { Request, Response } from "express";

class UploadFileController {
    async handle(req: Request, res: Response){
        if(!req.file){
            console.log("Erro ao salvar o arquivo");
            res.status(400)
            return res.json({status: "fail to upload"})
            
        }else{
            const {originalname,filename: banner} = req.file
            return res.json({status: "success"})
    }
    }

}

export {UploadFileController}