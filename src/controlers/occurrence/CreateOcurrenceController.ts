import { Response, Request } from "express";
import { CreateOcurrenceService } from "../../services/occurrence/CreateOcurrenceService";

class CreateOcurrenceController {
  async handle(req: Request, res: Response) {
    const { reanalise,classificacao_id, unidade_id, descricao, cartao_beneficiario, manifestacao_ant, identificacao_id,forma_resposta_id,assunto_id, sub_assunto_id,nome, email, CPF, telefone,canal_id} = req.body;

    

    const createOcurrenceService = new CreateOcurrenceService();

    const occurrence = await createOcurrenceService.execute({ reanalise,classificacao_id, unidade_id, descricao, cartao_beneficiario, manifestacao_ant, identificacao_id,forma_resposta_id,assunto_id, sub_assunto_id,nome, email, CPF, telefone,canal_id });

    if (occurrence.logError == 1) {
      res.status(occurrence.status)
      return res.json(occurrence.error)
    }
    
    

    return res.json({occurrence});
  }
}

export { CreateOcurrenceController };
