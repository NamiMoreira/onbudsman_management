import { Response, Request } from "express";
import { GetByProtocolService } from "../../services/occurrence/GetByProtocolService";

class GetByProtocolController{
    async handle(req: Request, res: Response){

        const {protocol} = req.params
        console.log(protocol);
        

        const getOcurrence = new GetByProtocolService();
        const ocurrences =  await getOcurrence.execute(protocol);
        console.log(ocurrences);
        
        return res.json(ocurrences)
        
    }
}

export {GetByProtocolController}